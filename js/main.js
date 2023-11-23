const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    select: false,
                    id: 1000,
                    isWriting: false,
                    inputText: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '24/11/2023 00:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    select: false,
                    id: 1001,
                    isWriting: false,
                    inputText: '',
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '23/11/2023 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        },
                        {
                            date: '23/11/2023 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    select: false,
                    id: 1002,
                    isWriting: false,
                    inputText: '',
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '22/11/2023 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    select: false,
                    id: 1003,
                    isWriting: false,
                    inputText: '',
                    messages: [
                        {
                            date: '10/01/2023 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/11/2023 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    select: false,
                    id: 1004,
                    isWriting: false,
                    inputText: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    select: false,
                    id: 1005,
                    isWriting: false,
                    inputText: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    select: false,
                    id: 1006,
                    isWriting: false,
                    inputText: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    select: false,
                    id: 1007,
                    isWriting: false,
                    inputText: 'asdasdasd',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            notificationAlert: true,
            focusedContactId: null,
        }
    },

    methods: {
        /**
         * Returns the day of the week corresponding to a given date.
         * If the date is within the last 7 days, it returns the name of the day.
         * Otherwise, it returns the date itself.
         *
         * @param {string} date - The date in string format (dd/mm/yyyy).
         * @returns {string} - The day of the week or the date itself.
         */
        contactDate(date) {
            // Extract the date portion from the input string
            const messageDate = date.substr(0, 10);
            const currentDate = new Date();

            // Check if the date is within the last 7 days
            if (
                parseInt(messageDate.substr(6, 4)) === parseInt(currentDate.getFullYear()) &&
                parseInt(messageDate.substr(3, 2)) === parseInt(currentDate.getMonth() + 1) &&
                parseInt(messageDate.substr(0, 2)) - parseInt(currentDate.getDate()) <= 7
            ) {
                // Calculate the difference between the message date and the current date
                const dayDifference = parseInt(messageDate.substr(0, 2)) - parseInt(currentDate.getDate());

                // Return the name of the day based on the day difference
                switch (dayDifference) {
                    case 0:
                        // If the day difference is 0, it means the date is today
                        return "Oggi";
                    case 1:
                        // If the day difference is 1, it means the date is tomorrow
                        return "Ieri";
                    default:
                        // Return the name of the day based on the message date
                        switch (new Date(`${messageDate.substr(6, 4)}/${messageDate.substr(3, 2)}/${messageDate.substr(0, 2)}`).getDay()) {
                            case 1: return "Lunedì";
                            case 2: return "Martedì";
                            case 3: return "Mercoledì";
                            case 4: return "Giovedì";
                            case 5: return "Venerdì";
                            case 6: return "Sabato";
                            case 7: return "Domenica";
                            default:
                                // If the day of the week is not recognized, return nothing
                                break;
                        }
                }
            }
            // Print the message date for debugging purposes
            // console.log(messageDate);

            // Return the date itself if it's not within the last 7 days
            return messageDate;
        },

        /**
         * Checks if the given message is from a different day than the previous message.
         * @param {Array} messages - The array of messages.
         * @param {number} i - The index of the current message.
         * @returns {boolean} - True if the message is from a different day, false otherwise.
         */
        moreThanADay(messages, i) {
            // Get the date of the current message
            const date = messages[i].date.substring(0, 10);

            // Check if there is a previous message
            if (i - 1 >= 0) {
                // Get the date of the previous message
                const previousDate = messages[i - 1].date.substring(0, 10);

                // Compare the dates
                if (date === previousDate) {
                    return false; // Same day, return false
                }
            }

            return true; // Different day, return true
        },

        /**
         * Toggles the select property of the given contact.
         *
         * @param {Object} contact - The contact object.
         */
        hoverContact(contact) {
            contact.select = !contact.select;
        },

        /**
         * Checks if a triangle needs to be drawn.
         * 
         * @param {Array} messages - The list of messages.
         * @param {number} i - The index of the current message in the list.
         * @returns {boolean} - True if a triangle needs to be drawn, false otherwise.
         */
        hasTriangle(messages, i) {
            // Check if the previous message exists and has a different status than the current message
            if (messages[i-1] && messages[i-1].status != messages[i].status || messages[i-1] == null) {
                return true;
            }
            return false;
        },

        /**
         * Sends a message to a contact.
         *
         * @param {string} id - The ID of the contact.
         */
        sendMessage(id) {
            // Find the contact with the given ID
            const contact = this.contacts.filter(contact => contact.id == id)[0];

            // Check if the contact has any input text
            if (contact.inputText != "") {
                // Get the current date and format it
                const currentDate = new Date().toLocaleString();
                const formattedCurrentDate = currentDate.substring(0, 10) + currentDate.substring(11, 20);

                // Add the message to the contact's messages array
                contact.messages.push({
                    date: formattedCurrentDate,
                    message: contact.inputText,
                    status: "sent"
                });

                // Clear the input text
                contact.inputText = "";

                // Set a timeout to send an automatic reply after 1 second
                const myTimeout = setTimeout(() => {
                    this.automaticReplyMessage(id);
                }, 1000);
            }
        },

        /**
         * Replies to a message automatically.
         * 
         * @param {string} id - The id of the contact.
         */
        async automaticReplyMessage(id) {
            // Delay function to simulate a delay
            const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
            
            // Find the contact with the given id
            const contact = this.contacts.filter(contact => contact.id == id)[0];
            
            // Get the current date and format it
            const currentDate = new Date().toLocaleString();
            const formattedCurrentDate = currentDate.substring(0, 10) + currentDate.substring(11, 20);

            // Set contact isWriting status to true
            contact.isWriting = true;

            // Wait for 3 seconds
            await delay(3000);

            // Push a new message to the contact's messages array
            contact.messages.push({
                date: formattedCurrentDate,
                message: "Ok",
                status: "received"
            });

            // Set contact isWriting status to false
            contact.isWriting = false;
        },

        /**
         * Deletes a message from the given array of messages at the specified index.
         * 
         * @param {Array} messages - The array of messages.
         * @param {number} index - The index of the message to delete.
         */
        deleteMessage(messages, index) {
            messages.splice(index, 1);
        },

        /**
         * Set the height of the side content based on the presence of a notification alert.
         */
        setSideContentHeight() {
            // Check if there is a notification alert
            if (this.notificationAlert) {
                // Get the contacts element and the notification alert element
                const contacts = document.querySelector('#contacts');
                const notificationAlert = document.querySelector('#notification');

                // Get the current height of the notification alert
                const notificationRect = notificationAlert.getBoundingClientRect();

                // Calculate the new height of the contacts element
                const newHeight = `calc(100% - ${notificationRect.height}px - 59px - 49px)`;
                contacts.style.height = newHeight;
            } else {
                // Get the contacts element
                const contacts = document.querySelector('#contacts');

                // Calculate the new height of the contacts element
                const newHeight = `calc(100% - 59px - 49px)`;
                contacts.style.height = newHeight;
            }
        }
    },
    
    mounted() {
        if (this.notificationAlert) {
            // Set the height of the side content based on notification div height change (overkill workaround, try to find easyer solution)
            const resizeObserver = new ResizeObserver(this.setSideContentHeight);
            resizeObserver.observe(document.getElementById('notification'));
        }
    }
}).mount('#app');

