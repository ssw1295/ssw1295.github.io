import {
  FormEvent,
  FormEventHandler,
  useState,
} from 'react'

import './index.scss'

const COMPONENT_NAME = 'content'

const CATEGORY = '디지털기기'

type UsedTradeSearchQuery = {
  keyword: string
  location: string
  onlyAvailable: boolean
  category: typeof CATEGORY
  priceMin: number | null
  priceMax: number | null
}

const parsePrice = (value: string) => {
  if (value.trim() === '') {
    return null
  }

  const parsed = Number(value)
  if (!Number.isFinite(parsed)) {
    return null
  }

  return parsed
}

const formatPrice = (value: number | null) => {
  if (value === null) {
    return '제한 없음'
  }

  return `${value.toLocaleString('ko-KR')}원`
}

const searchUsedTrade = (query: UsedTradeSearchQuery) => {
  console.log('[daangn-tracker] search', query)
  return query
}

export default ({
}: {
}) => {
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('')
  const [onlyAvailable, setOnlyAvailable] = useState(false)
  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')
  const [lastQuery, setLastQuery] = useState<UsedTradeSearchQuery | null>(null)

  const filterCount = [
    onlyAvailable,
    priceMin !== '' || priceMax !== '',
  ].filter(Boolean).length

  const buildQuery = (): UsedTradeSearchQuery => ({
    keyword: keyword.trim(),
    location: location.trim(),
    onlyAvailable,
    category: CATEGORY,
    priceMin: parsePrice(priceMin),
    priceMax: parsePrice(priceMax),
  })

  const resetFilters = () => {
    setOnlyAvailable(false)
    setPriceMin('')
    setPriceMax('')
  }

  const handlePriceChange = (
    value: string,
    setPrice: (next: string) => void,
  ) => {
    setPrice(value.replace(/[^\d]/g, ''))
  }

  const handleSubmitSearch: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const searchKeyword = keyword.trim();
    const searchLocation = location.trim();
    const searchUrl = `https://www.daangn.com/kr/search/buy-sell/?in=${searchLocation}&q=${searchKeyword}`;

    try {
      const html = await (await fetch(searchUrl)).text();
      const doc = new window.DOMParser().parseFromString(html, "text/html");
      const scripts = [...doc.querySelectorAll('script[type="application/ld+json"]')];
      const ldJson = scripts
        .map(el => {
          try {
            return JSON.parse(el.textContent || '');
          } catch {
            return null;
          }
        })
        .find(obj => obj && obj["@type"] === "ItemList");

      if (!ldJson) {
        console.log("검색된 ItemList 데이터가 없습니다.");
        return;
      }

      const products = ldJson.itemListElement.map(({ item }: any) => {
        const id = item.url.match(/-([a-z0-9]+)\/?$/)?.[1];
        return {
          id,
          name: item.name,
          price: Number(item.offers?.price),
          description: item.description,
          image: item.image,
          url: `https://www.daangn.com/kr/buy-sell/${id}/`
        };
      });

      console.log("상품 수:", products.length);
      console.table(products);
    } catch (err) {
      console.error("fetch/parsing error", err);
    }
  }

  return (
    <div className={COMPONENT_NAME}>
      <form className="panel" onSubmit={handleSubmitSearch}>
        <h1>중고거래 트래커</h1>

        <label className="field">
          <span>검색어</span>
          <input
            type="text"
            value={keyword}
            placeholder="검색어를 입력하세요"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </label>

        <label className="field">
          <span>장소</span>
          <input
            type="text"
            value={location}
            placeholder="동 이름 (예: 신림동)"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>

        <section className="filter">
          <div className="filter-head">
            <h2>필터{filterCount > 0 ? ` ${filterCount}` : ''}</h2>
            <button type="button" className="text-button" onClick={resetFilters}>
              초기화
            </button>
          </div>

          <fieldset>
            <legend>상태</legend>
            <label className="check">
              <input
                type="checkbox"
                checked={onlyAvailable}
                onChange={(event) => setOnlyAvailable(event.target.checked)}
              />
              거래 가능한만 보기
            </label>
          </fieldset>

          <fieldset>
            <legend>가격</legend>
            <div className="price-range">
              <input
                type="text"
                inputMode="numeric"
                value={priceMin}
                placeholder="최소"
                aria-label="최소 가격"
                onChange={(event) => handlePriceChange(event.target.value, setPriceMin)}
              />
              <span>-</span>
              <input
                type="text"
                inputMode="numeric"
                value={priceMax}
                placeholder="최대"
                aria-label="최대 가격"
                onChange={(event) => handlePriceChange(event.target.value, setPriceMax)}
              />
            </div>
          </fieldset>
        </section>

        <button type="submit" className="search-button">
          검색
        </button>

        {lastQuery && (
          <p className="result">
            검색 함수가 호출되었습니다.
            {' '}
            {lastQuery.keyword || '검색어 없음'}
            {' · '}
            {lastQuery.location || '장소 없음'}
            {' · '}
            {lastQuery.onlyAvailable ? '거래 가능' : '상태 전체'}
            {' · '}
            {formatPrice(lastQuery.priceMin)} ~ {formatPrice(lastQuery.priceMax)}
          </p>
        )}
      </form>
    </div>
  )
}
