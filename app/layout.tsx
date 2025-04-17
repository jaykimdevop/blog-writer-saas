import "./globals.css";

export const metadata = {
  title: "블로그 자동 글 작성",
  description: "카테고리를 선택하고 글을 자동으로 만들어보세요!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
