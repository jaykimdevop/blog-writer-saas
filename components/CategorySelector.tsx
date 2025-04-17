"use client";

import { useState } from "react";

const categories = [
  { name: "법률 및 정부", level: "높음", reason: "경쟁이 치열하고, 클릭당 수익이 높아 광고 단가가 높습니다." },
  { name: "홈 & 홈 인테리어", level: "높음", reason: "주택 관련 서비스 수요 증가로 인해 광고 단가 상승이 예상됩니다." },
  { name: "치과 및 치과 서비스", level: "높음", reason: "고부가가치 의료 서비스로 인해 광고 단가가 높습니다." },
  { name: "비즈니스 및 산업", level: "높음", reason: "전문 서비스에 대한 수요 증가로 광고 경쟁이 치열합니다." },
  { name: "건강 & 피트니스", level: "중간", reason: "건강에 대한 관심 증가로 광고 수요가 높아지고 있습니다." },
  { name: "금융", level: "높음", reason: "금융 상품에 대한 경쟁이 치열하여 광고 단가가 높습니다." },
  { name: "교육", level: "중간", reason: "온라인 교육 수요 증가로 광고 경쟁이 심화되고 있습니다." },
  { name: "자동차 및 차량", level: "중간", reason: "자동차 시장의 경쟁으로 광고 단가가 상승하고 있습니다." },
  { name: "부동산", level: "중간", reason: "부동산 시장의 활발한 거래로 광고 수요가 증가하고 있습니다." },
  { name: "여행", level: "낮음", reason: "여행 수요 회복으로 광고 경쟁이 증가하고 있습니다." },
];

export default function CategorySelector() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (name: string) => {
    setSelected(prev =>
      prev.includes(name) ? prev.filter(cat => cat !== name) : [...prev, name]
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map(cat => (
        <div
          key={cat.name}
          onClick={() => toggle(cat.name)}
          className={`border p-4 rounded-lg shadow cursor-pointer transition-all ${
            selected.includes(cat.name)
              ? "bg-blue-100 border-blue-400"
              : "bg-white"
          }`}
        >
          <div className="font-semibold text-lg">{cat.name}</div>
          <div className="text-sm text-gray-600">경쟁도: {cat.level}</div>
          {selected.includes(cat.name) && (
            <div className="mt-2 text-sm text-gray-700">{cat.reason}</div>
          )}
        </div>
      ))}
    </div>
  );
}
