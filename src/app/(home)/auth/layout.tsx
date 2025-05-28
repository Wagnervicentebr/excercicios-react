export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full mx-auto my-auto">
        {children}
    </div>
  );
}
