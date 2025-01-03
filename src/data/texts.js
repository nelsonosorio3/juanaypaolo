// src/texts.js

export const texts = {
    en: {
      heroAlt: "Couple Kissing",
      countdownLabel(days) {
        return days > 0 ? `${days} days to go!` : "The big day is here!";
      },
      navbar: {
        calendar: "Calendar",
        gallery: "Gallery",
        gifts: "Gifts",
        recommendations: "Recommendations",
        rsvp: "RSVP",
        messageBoard: "Message Board"
      },
      scheduleTitle: "Schedule",
      scheduleItems: [
        {
          title: "Groom’s birthday",
          date: "Tuesday, July 29, 2025",
          details: "Details to come"
        },
        {
          title: "Welcome Party",
          date: "Thursday, July 31, 2025",
          details: "Details to come"
        },
        {
          title: "The Big Day",
          date: "Sunday, August 3, 2025",
          details: "Dresscode: Formal\nDetails to come"
        },
        {
          title: "Gossip Corner",
          date: "Monday, August 4, 2025",
          details: "Details to come"
        }
      ],
      galleryTitle: "Photo Gallery",
      giftsTitle: "Gifts",
      giftsText: "Your presence is the best gift, but if you would like to contribute to our first home payment we would greatly appreciate it!",
      contributeText: "SOON",
      recommendationsTitle: "Recommendations in Medellín",
      recFood: "If you stay around Manila/El Poblado there are many places to eat.",
      recTrans: "Uber is available\nBe a conscious tourist!",
      rsvpTitle: "RSVP",
      rsvpPrompt: "Please RSVP before January 31st",
      rsvpNamePlaceholder: "First and Last Name",
      rsvpAttendLabel: "Will you attend?",
      rsvpPlusOneLabel: "Plus One?",
      rsvpPlusOneNamePlaceholder: "Plus One Name (if any)",
      rsvpFoodPlaceholder: "Food preference or dietary restrictions",
      rsvpSubmit: "Submit",
      msgTitle: "Message Board",
      msgPlaceholder: "Your message...",
      msgPlaceholderName: "Your name...",
      msgAddButton: "Add",
      footerText: "With love from Colombia",
      loginNamePlaceholder: "Enter your name",
      loginLanguageLabel: "Select language:",
      loginPasswordPlaceholder: "Enter password",
      loginButton: "Enter",
      yes: "Yes",
      emailOrPhone: "Email or Phone",
      foodPreferences: "Food preference ",
      loading: "Loading...",
      loginSuccess: "Access successful!",
      loginError: "Failed to access",
      rsvpSuccess: "RSVP submitted!",
      rsvpError: "Error submitting RSVP",
      messageSuccess: "Message posted!",
      messageError: "Error posting message",
      fetchMessagesError: "Error fetching messages",
      arrival: "Arrival in Medellín",
      recArrival: "The José Maria Córdoba International Airport (MDE) is on the outskirts of Medellín in Rionegro. The Uber is about $30 dollars.",
      hotels: "Lodging in Medellín ",
      recStay1: "Booking.com is a platform like Airbnb that will help you in finding a stay that fulfills your needs!",
      recStay2: "In this link,", 
      recStay3: " “El Poblado” is preselected as it’s a recommended area. This link will take you to the options in which you can filter by and change dates, area, number of people/rooms. It includes hotels and apartments.",
      recStay4: "Places by Manila might be slightly cheaper than Provenza. El parque Lleras is in the middle of both",
      recStay5: "The wedding will take place outside of Medellin in Envigado, which is another beautiful area. However we recommend you stay in Medellin.",
      recStay6: "You can also use Airbnb for the search.",
      transportation: "Transportation",
      recTransportation1: "Medellín has a great public transportation system! Options include the subway, tram, cable metro, taxi and Uber! When using uber, you can also select the option “taxi” which at times might be cheaper.",
      recTransportation2: "Download Google maps and Uber to get around easily.",
      nightlife: "Nightlife",
      recNightlife1: "There are many options! Two popular and nearby areas with bars/clubs are Lleras Park and Provenza ",
      recNightlife2: "Karol G music in the background",
      recNightlife3: ". Medellin is a very touristy city, so you will find something for everyone. Keep in mind that also because of this there will be friendlier prices and much more expensive ones. We recommend checking on Google to see the prices of the places before entering. Be aware of the people you go out with since you are in a new place! Use a buddy system, we keep us safe.",
      activities: "Activities and food",
      recActivities1: "Some places of interest: Comuna 13, Pueblito Paisa, Guatapé, Sabaneta.",
      recActivities2: "Don't miss out on the gastronomy! The famous bandeja paisa originates in Medellín. From arepa with chorizo, pandebonos, almojabanas, buñuelos, to empanadas, and sancocho. You can’t go wrong, and of course don’t forget to pair it with a good cup of coffee or natural fruit juice (aguardiente is optional but encouraged). "
    },
    es: {
      heroAlt: "Pareja besándose",
      countdownLabel(days) {
        return days > 0 ? `¡${days} días para el gran día!` : "¡El gran día llegó!";
      },
      navbar: {
        calendar: "Calendario",
        gallery: "Galería",
        gifts: "Regalos",
        recommendations: "Recomendaciones",
        rsvp: "RSVP",
        messageBoard: "Mensajes"
      },
      scheduleTitle: "Calendario",
      scheduleItems: [
        {
          title: "Cumpleaños del Novio",
          date: "Martes 29 de julio, 2025",
          details: "Detalles pronto"
        },
        {
          title: "Bienvenida: Finca de las flores",
          date: "Jueves julio 31, 2025",
          details: "Detalles pronto"
        },
        {
          title: "El gran día",
          date: "Domingo agosto 3, 2025",
          details: "Código de vestimenta: formal\nDetalles pronto"
        },
        {
          title: "Chismecito Chill",
          date: "Lunes agosto 4, 2025",
          details: "Detalles pronto"
        }
      ],
      galleryTitle: "Galería",
      giftsTitle: "Regalos",
      giftsText: "El mejor regalo es tu presencia, pero si deseas contribuir con el anticipo de nuestro primer hogar lo agradeceríamos inmensamente!",
      contributeText: "PRONTO",
      recommendationsTitle: "Recomendaciones en Medellín",
      recStay: "Pronto agregaremos vinculos de hoteles cercanos",
      recFood: "Si se quedan por Manila/el Poblado hay muchos sitios para comer.\nEjemplo de actividades: Guatapé, probar Bandeja Paisa",
      recTrans: "Hay Uber disponible.\n¡Sé un turista consciente!",
      rsvpTitle: "RSVP",
      rsvpPrompt: "Por favor reservar antes del 31 de enero",
      rsvpNamePlaceholder: "Nombre y Apellido",
      rsvpAttendLabel: "¿Asistirás?",
      rsvpPlusOneLabel: "¿Acompañante?",
      rsvpPlusOneNamePlaceholder: "Nombre de acompañante (si aplica)",
      rsvpFoodPlaceholder: "Preferencia de comida o restricciones alimentarias",
      rsvpSubmit: "Enviar",
      msgTitle: "Deja tu mensaje!",
      msgPlaceholder: "Tu mensaje...",
      msgPlaceholderName: "Tu nombre...",
      msgAddButton: "Agregar",
      footerText: "Con amor desde Colombia",
      loginNamePlaceholder: "Ingresa tu nombre",
      loginLanguageLabel: "Selecciona el idioma:",
      loginPasswordPlaceholder: "Ingresa la contraseña",
      loginButton: "Entrar",
      yes: "Sí",
      emailOrPhone: "Email o Celular",
      foodPreferences: "Preferencia Alimenticia",
      loading: "Cargando...",
      loginSuccess: "¡Acceso exitoso!",
      loginError: "Error al iniciar sesión",
      rsvpSuccess: "¡Tu confirmación fue enviada!",
      rsvpError: "Error al enviar tu confirmación",
      messageSuccess: "¡Mensaje publicado!",
      messageError: "Error al publicar el mensaje",
      fetchMessagesError: "Error al obtener mensajes",
      arrival: "Llegada a Medellín ",
      recArrival: "El aereopuerto internacional José Maria Córdoba (MDE) queda a las afueras de Medellín en Rionegro. El Uber son aproximadamente $30 dólares.",
      hotels: "Estadía y hoteles ",
      recStay1: "Booking.com es una plataforma como Airbnb que les ayudará a encontrar la estadía que se ajuste a sus necesidades!",
      recStay2: "En este enlace", 
      recStay3: " el área de “El Poblado” está pre seleccionada como área recomendada. De todas formas pueden cambiar las fechas, área e incluir el número de personas/cuartos. Incluye opciones de hoteles y apartamentos.",
      recStay4: "Los lugares cerca de Manila pueden ser un poco más baratos que Provenza. El parque Lleras está en el medio de ambos.",
      recStay5: "La boda se llevará a cabo fuera de Medellín, en Envigado, que es otra zona hermosa. Sin embargo, le recomendamos que se quede en Medellín.",
      recStay6: "También puedes usar Airbnb para la búsqueda",
      transportation: "Transporte",
      recTransportation1: "Medellín tiene un gran sistema de transporte público! Opciones incluyen el metro, tranvía, metro cable, taxi y Uber! Si están usando Uber, pueden seleccionar la opción “taxi” que a veces es más económico.",
      recTransportation2: "Descarga Google maps y Uber para moverte con facilidad.",
      nightlife: "Vida Nocturna",
      recNightlife1: "Hay muchas opciones! Dos áreas populares y cercanas con bares/clubs son el Parque Lleras y Provenza ",
      recNightlife2: "suena música de Karol G",
      recNightlife3: ". Medellin es una ciudad muy turística, así q encontrarán para todos los gustos. Tengan en mente que también por esto habrá precios más amigables y otros muchos más caros. Recomendamos revisar en Google para ver los precios de los lugares antes de entrar. Estén pendientes a las personas con las que salgan ya que están en un lugar nuevo! Entre nosotros nos mantenemos seguros.",
      activities: "Actividades y comida",
      recActivities1: "Algunos lugares de interés: comuna 13, pueblito paisa, Guatapé, sabaneta.",
      recActivities2: "No se pierdan la gastronomía! La famosa bandeja paisa tiene origen en Medellín. Desde arepa con chorizo, pandebonos, almojabanas, buñuelos, a empanadas, y sancocho. No hay pierde y claro, no olviden acompañarlo de un buen café o juga natural (añádale aguerdiente, es opcional pero recomendado!). "
    }
  };
  