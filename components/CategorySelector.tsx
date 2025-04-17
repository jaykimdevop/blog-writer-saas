"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Tooltip } from "./ui/tooltip";

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
  { name: "예술 및 엔터테인먼트", level: "중간", reason: "대중적이지만 광고 단가는 비교적 낮은 편입니다." },
  { name: "도서 및 문학", level: "낮음", reason: "전환율이 낮아 광고 단가는 비교적 낮습니다." },
  { name: "컴퓨터 및 전자제품", level: "중간", reason: "IT 및 디지털 서비스는 점차 수요 증가 중입니다." },
  { name: "음식 및 음료", level: "낮음", reason: "일반적인 콘텐츠로 광고 단가가 낮은 편입니다." },
  { name: "게임", level: "중간", reason: "젊은 층 중심의 타겟팅으로 단가는 중간 정도입니다." },
  { name: "취미 및 여가", level: "낮음", reason: "광고 수요는 있지만 전환율이 낮습니다." },
  { name: "인터넷 및 통신", level: "중간", reason: "디지털 기반 서비스에 대한 광고 수요는 꾸준합니다." },
  { name: "뉴스", level: "낮음", reason: "정보성 콘텐츠로 전환율이 낮은 편입니다." },
  { name: "온라인 커뮤니티", level: "낮음", reason: "대중적이지만 전환율 낮음" },
  { name: "사람 및 사회", level: "낮음", reason: "감성 콘텐츠로 광고 단가가 낮습니다." },
  { name: "애완동물 및 동물", level: "중간", reason: "특정 타겟에게는 유효하나 광고 단가는 낮은 편입니다." },
  { name: "참조", level: "낮음", reason: "정보 중심 콘텐츠로 광고 효율이 낮습니다." },
  { name: "과학", level: "낮음", reason: "학문적 성격으로 광고 수요 낮음" },
  { name: "쇼핑", level: "중간", reason: "소비 전환율이 높은 상품군" },
  { name: "스포츠", level: "중간", reason: "광고주 수요는 존재하나 전문 타겟 필요" },
  { name: "세계 지역", level: "낮음", reason: "지역정보 콘텐츠로 전환율 낮음" }
];

export default function CategorySelector() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (name: string) => {
    setSelected(prev =>
      prev.includes(name) ? prev.filter(cat => cat !== name) : [...prev, name]
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map(cat => (
        <Tooltip key={cat.name} content={cat.reason}>
          <Card
            onClick={() => toggle(cat.name)}
            className={`flex items-start gap-3 cursor-pointer transition-all border-2 p-4 rounded-xl ${
              selected.includes(cat.name)
                ? "bg-blue-50 border-blue-400 shadow-md"
                : "hover:border-gray-300"
            }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(cat.name)}
              onChange={() => toggle(cat.name)}
              className="mt-1"
            />
            <div>
              <div className="font-semibold text-base">{cat.name}</div>
              <div className="text-sm text-gray-600">경쟁도: {cat.level}</div>
            </div>
          </Card>
        </Tooltip>
      ))}
    </div>
  );
}
