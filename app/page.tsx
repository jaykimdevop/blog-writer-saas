import CategorySelector from "@/components/CategorySelector";

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-10 px-6">
      <h1 className="text-2xl font-bold mb-6">카테고리를 선택하세요</h1>
      <CategorySelector />
    </main>
  );
}
