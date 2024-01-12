document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('main');
    const context = canvas.getContext('2d');
  
    const nextCanvas = document.getElementById('next');
    const nextContext = nextCanvas.getContext('2d');
  
    const timeElement = document.getElementById('time');
    const scoreElement = document.getElementById('score');
  
    // Your Tetris logic goes here...
  
    // Example: Draw a square
    context.fillStyle = '#00F'; // Blue color
    context.fillRect(50, 50, 30, 30);
  
    // More Tetris logic...
  
  });
  