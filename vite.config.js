@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-heading: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;

    --background: 0 0% 99%;
    --foreground: 222 30% 12%;
    --card: 0 0% 100%;
    --card-foreground: 222 30% 12%;
    --popover: 0 0% 100%;
    --popover-foreground: 222 30% 12%;
    --primary: 217 91% 50%;
    --primary-foreground: 0 0% 100%;
    --secondary: 220 14% 96%;
    --secondary-foreground: 222 30% 20%;
    --muted: 220 14% 96%;
    --muted-foreground: 215 16% 47%;
    --accent: 217 91% 50%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 217 91% 50%;
    --chart-1: 217 91% 50%;
    --chart-2: 190 80% 42%;
    --chart-3: 250 70% 56%;
    --chart-4: 160 60% 40%;
    --chart-5: 30 80% 50%;
    --radius: 0.75rem;
    --sidebar-background: 0 0% 100%;
    --sidebar-foreground: 222 30% 12%;
    --sidebar-primary: 217 91% 50%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 220 14% 96%;
    --sidebar-accent-foreground: 222 30% 12%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217 91% 50%;
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: hsl(220, 14%, 96%);
}
::-webkit-scrollbar-thumb {
  background: hsl(220, 13%, 80%);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: hsl(217, 91%, 50%);
}