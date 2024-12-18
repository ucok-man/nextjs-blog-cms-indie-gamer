import SearchProvider from "@/context/search";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SearchProvider>{children}</SearchProvider>
    </>
  );
}
