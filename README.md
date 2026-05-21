# Little Calendar

A minimal desktop calendar widget built with Electron, featuring a transparent pastel UI and month navigation.

This project started as a simple date widget and gradually evolved into a small desktop calendar application with multiple pages, dynamic calendar rendering, and custom styling.

## Features

- Transparent frameless desktop widget
- Full monthly calendar view
- Previous and next month navigation
- Highlighted current date
- Pastel-themed UI
- Draggable Electron window
- Custom close button
- Lightweight and simple design


## Built With

- Electron
- HTML
- CSS
- JavaScript

## Screenshots

<img width="188" height="202" alt="image" src="https://github.com/user-attachments/assets/c91534e0-10d8-43f0-bbff-20894b955f86" />
<img width="304" height="309" alt="image" src="https://github.com/user-attachments/assets/9c968601-698f-49f3-939a-8d4723e1c241" />

## Run Locally

Clone the repository:

```bash
git clone https://github.com/devashreekinjale/my-little-calendar.git
```

Go to the project folder:

```bash
cd my-little-calendar
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

## Build the App

```bash
npm run dist
```

## Inspiration

This project was originally inspired by a YouTube tutorial/template:

@nashallery (https://youtu.be/btxGSJ3Dh8E?si=JMQs4Kka7ejhSxN_)

Following that tutorial helped me understand:
- how Electron applications work
- how desktop applications are structured
- how web technologies can be used to build desktop software

From there, I continued experimenting and customizing the project by:
- redesigning the interface
- adding page navigation
- creating a full monthly calendar view
- implementing month switching
- improving layout stability
- refining the overall user experience

This project became an important hands-on learning experience for understanding Electron and desktop application development.


## Limitations

Since this project is built with Electron, it has some common Electron-related limitations:

- Higher memory usage compared to native desktop applications
- Larger application size because Chromium and Node.js are bundled together
- Limited optimization for low-end systems
- Platform-specific build and packaging differences

For a lightweight personal desktop widget, these limitations are generally acceptable.

## Future Improvements

- System tray support
- Open on startup
- Theme customization
- Smooth page transitions
- Responsive resizing

## License

This project is intended for learning and personal use.
