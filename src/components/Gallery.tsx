'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Gallery.module.css';

const Gallery = ({
  images,
  autoPlay = false,
  autoPlayInterval = 5000,
  showThumbnails = true,
  showCaption = true,
  onImageClick
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const galleryRef = useRef(null);
  
  const dragStartX = useRef(null);
  const currentTranslate = useRef(0);
  const imageWrapperRef = useRef(null);
  const isDragging = useRef(false);

  // Memoize handleNext and handlePrev with useCallback to prevent recreation on each render
  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    
    setTimeout(() => setIsTransitioning(false), 500);
    
    if (autoPlay && images.length > 1 && !isLightboxOpen) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 500);
      }, autoPlayInterval);
    }
  }, [isTransitioning, autoPlay, autoPlayInterval, images.length, isLightboxOpen]);
  
  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    
    setTimeout(() => setIsTransitioning(false), 500);
    
    if (autoPlay && images.length > 1 && !isLightboxOpen) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 500);
      }, autoPlayInterval);
    }
  }, [isTransitioning, autoPlay, autoPlayInterval, images.length, isLightboxOpen]);
  
  const handleThumbnailClick = (index) => {
    if (currentIndex === index) return;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);

    if (autoPlay && images.length > 1 && !isLightboxOpen) {
      intervalRef.current = setInterval(handleNext, autoPlayInterval);
    }
  };

  const handleImageClick = (e) => {
    if (!isDragging.current) {
      if (onImageClick) {
        onImageClick(images[currentIndex]);
      } else {
        setIsLightboxOpen(true);
      }
    }
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleDragStart = (e) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    isDragging.current = true;
    
    if ('touches' in e) {
      dragStartX.current = e.touches[0].clientX;
    } else {
      dragStartX.current = e.clientX;
    }
    
    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.transition = 'none';
    }
  };

  const handleDrag = (e) => {
    if (!isDragging.current || dragStartX.current === null || !imageWrapperRef.current) return;
    
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = currentX - dragStartX.current;
    
    const wrapperWidth = imageWrapperRef.current.offsetWidth;
    const maxTranslate = wrapperWidth * 0.4;
    
    currentTranslate.current = Math.max(Math.min(diff, maxTranslate), -maxTranslate);
    
    imageWrapperRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  };

  const handleDragEnd = () => {
    if (!isDragging.current || dragStartX.current === null || !imageWrapperRef.current) return;
    
    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.transition = 'transform 0.3s ease-out';
      imageWrapperRef.current.style.transform = 'translateX(0)';
    }
    
    const threshold = imageWrapperRef.current.offsetWidth * 0.2;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    if (currentTranslate.current < -threshold) {
      handleNext();
    } else if (currentTranslate.current > threshold) {
      handlePrev();
    } else {
      if (autoPlay && images.length > 1 && !isLightboxOpen) {
        intervalRef.current = setInterval(handleNext, autoPlayInterval);
      }
    }
    
    dragStartX.current = null;
    currentTranslate.current = 0;
    isDragging.current = false;
  };

  // Fixed useEffect hook - added handleNext to dependency array
  useEffect(() => {
    if (autoPlay && images.length > 1) {
      intervalRef.current = setInterval(handleNext, autoPlayInterval);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, images.length, handleNext]);

  // Fixed useEffect hook - added handleNext to dependency array
  useEffect(() => {
    if (isLightboxOpen && intervalRef.current) {
      clearInterval(intervalRef.current);
    } else if (autoPlay && !isLightboxOpen && images.length > 1) {
      intervalRef.current = setInterval(handleNext, autoPlayInterval);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isLightboxOpen, autoPlay, autoPlayInterval, images.length, handleNext]);

  // Fixed useEffect hook - added handleNext and handlePrev to dependency array
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isLightboxOpen) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'Escape') closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, handleNext, handlePrev]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isLightboxOpen && galleryRef.current && !galleryRef.current.contains(e.target)) {
        closeLightbox();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLightboxOpen]);

  if (!images || images.length === 0) {
    return <div className={styles.emptyGallery}>No images to display</div>;
  }

  return (
    <div className={styles.galleryContainer} ref={galleryRef}>
      <div className={styles.mainImageContainer}>
        <button 
          className={`${styles.navButton} ${styles.prevButton}`} 
          onClick={handlePrev}
          aria-label="Previous image"
        >
          &#10094;
        </button>
        
        <div 
          className={styles.imageWrapper} 
          ref={imageWrapperRef}
          onClick={handleImageClick}
          onMouseDown={handleDragStart}
          onMouseMove={handleDrag}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDrag}
          onTouchEnd={handleDragEnd}
          style={{ touchAction: 'pan-y', cursor: isDragging.current ? 'grabbing' : 'grab' }}
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
            className={`${styles.mainImage} ${isTransitioning ? styles.fadeTransition : ''}`}
            loading="lazy"
            draggable="false"
          />
          
          {showCaption && images[currentIndex].caption && (
            <div className={styles.caption}>
              {images[currentIndex].caption}
            </div>
          )}
        </div>
        
        <button 
          className={`${styles.navButton} ${styles.nextButton}`} 
          onClick={handleNext}
          aria-label="Next image"
        >
          &#10095;
        </button>
      </div>
      
      {showThumbnails && images.length > 1 && (
        <div className={styles.thumbnailsContainer}>
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      )}

      {isLightboxOpen && (
        <div className={styles.lightbox}>
          <div className={styles.lightboxContent}>
            <button 
              className={`${styles.lightboxButton} ${styles.closeLightbox}`} 
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            
            <button 
              className={`${styles.lightboxButton} ${styles.lightboxPrev}`} 
              onClick={handlePrev}
              aria-label="Previous image"
            >
              &#10094;
            </button>
            
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
              className={styles.lightboxImage}
              draggable="false"
            />

            <button 
              className={`${styles.lightboxButton} ${styles.lightboxNext}`} 
              onClick={handleNext}
              aria-label="Next image"
            >
              &#10095;
            </button>
            
            {showCaption && images[currentIndex].caption && (
              <div className={styles.lightboxCaption}>
                {images[currentIndex].caption}
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className={styles.pagination}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Gallery;