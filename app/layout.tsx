export const metadata = {
  title: "PhantomVelocity — Exotic & Performance Dealership",
  description: "Private showrooms, white-glove delivery, and track-ready performance."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
