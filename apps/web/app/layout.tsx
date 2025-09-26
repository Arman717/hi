import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sales Call Recorder',
  description: 'Capture, transcribe, and summarize sales calls with consent compliance.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
