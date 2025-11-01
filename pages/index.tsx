import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { useState, useMemo, type ReactNode } from 'react'

export default function Home() {
  const [showMore, setShowMore] = useState(false)
  interface NewsItem { date: string; title: string; extra?: ReactNode }
  const newsItems: NewsItem[] = [
    { date: '2024/05/21', title: '経営体制を共同代表制に刷新しました' },
    { date: '2024/03/22', title: '資本金を1,000万円に変更' },
    { date: '2023/10/26', title: 'オフィスを移設しました' },
    { date: '2023/09/11', title: 'サイトを開設しました' },
    {
      date: '2015/04/01',
      title: '京都コミュニティ放送「まいど教授の日本社会へのエール！」で番組配信',
      extra: (
        <p className="mt-2 text-sm text-blue-600">
          <a href="https://radiocafe.jp/201504001/?intro=1" target="_blank" rel="noopener noreferrer">番組ページ</a>
        </p>
      ),
    },
    { date: '2015/03/02', title: '資本金を9,800万円に変更' },
    {
      date: '2006/09/01',
      title: '「舞台上話者自動追尾装置付き全自動音像定位装置の開発」',
      extra: (
        <>
          <p className="mt-2 text-sm">平成8年京都府中小企業創造的活動促進法認定事業計画に採択</p>
          <p className="mt-2 text-sm text-blue-600">
            <a href="https://www.pref.kyoto.jp/sangyo-sien/13200026.html" target="_blank" rel="noopener noreferrer">京都府 事業計画ページ</a>
          </p>
        </>
      ),
    },
    {
      date: '1999/12/17',
      title: '「画像処理方法およびその装置並びに記憶媒体」に関する国際特許出願（WO2001-045385）',
      extra: (
        <div className="mt-2 space-x-4 text-sm">
          <a className="text-blue-600" href="https://jglobal.jst.go.jp/detail?JGLOBAL_ID=200903053605294466" target="_blank" rel="noopener noreferrer">J-GLOBAL 情報 1</a>
          <a className="text-blue-600" href="https://jglobal.jst.go.jp/detail?JGLOBAL_ID=201103034242077739" target="_blank" rel="noopener noreferrer">J-GLOBAL 情報 2</a>
        </div>
      ),
    },
    {
      date: '1996/09/27',
      title: '「端子部露出型電気ウキ」に関する国際特許出願（特開平10-098997）',
      extra: (
        <p className="mt-2 text-sm text-blue-600">
          <a href="https://jglobal.jst.go.jp/detail?JGLOBAL_ID=200903084955729174" target="_blank" rel="noopener noreferrer">J-GLOBAL 情報</a>
        </p>
      ),
    },
    { date: '1992/03/17', title: '創業' },
  ]
  const sortedNews = useMemo(() => {
    // 日付文字列 (YYYY/MM/DD) の辞書順で降順ソート
    return [...newsItems].sort((a, b) => b.date.localeCompare(a.date))
  }, [newsItems])
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Intermedia Ltd. - システム開発・コンサルティング</title>
        <meta name="description" content="最先端のテクノロジーで、ビジネスの課題を解決します" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative h-screen">
          <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center object-cover object-center bg-fixed bg-no-repeat">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative z-10 flex h-full items-center justify-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="mb-6 text-5xl font-bold">SOLVING WITH EDGE</h1>
              <p className="mb-8 text-xl">課題の本質をテクノロジーの力で解決する</p>
            </motion.div>
          </div>
        </div>

        {/* News Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">ニュース</h2>
            <div className="mx-auto max-w-3xl space-y-8">
              {sortedNews.slice(0, 3).map((item) => (
                <motion.div key={`${item.date}-${item.title}`}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-lg bg-white p-6 shadow-lg"
                >
                  <div className="mb-2 text-sm text-gray-600">{item.date}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {item.extra}
                </motion.div>
              ))}

              <div className="text-center pt-2">
                <button
                  onClick={() => setShowMore(v => !v)}
                  className="inline-block rounded-full border border-gray-300 px-6 py-2 text-sm font-semibold text-gray-800 bg-white hover:bg-gray-50"
                  aria-expanded={showMore}
                  aria-controls="news-more"
                >
                  {showMore ? '閉じる' : 'もっと見る'}
                </button>
              </div>

              {showMore && (
                <div id="news-more" className="space-y-6 pt-6">
                  {sortedNews.slice(3).map((item) => (
                    <motion.div key={`${item.date}-${item.title}`}
                      whileHover={{ scale: 1.02 }}
                      className="overflow-hidden rounded-lg bg-white p-6 shadow-lg"
                    >
                      <div className="mb-2 text-sm text-gray-600">{item.date}</div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      {item.extra}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">サービス</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-lg bg-gray-50 p-6 shadow-lg"
              >
                <h3 className="mb-4 text-xl font-semibold">システム開発</h3>
                <p>最新のテクノロジーを活用した、カスタマイズされたソリューションを提供します。</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-lg bg-gray-50 p-6 shadow-lg"
              >
                <h3 className="mb-4 text-xl font-semibold">コンサルティング</h3>
                <p>チームビルディングの提案から、技術者の採用まで、包括的なサポートを提供します。</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-lg bg-gray-50 p-6 shadow-lg"
              >
                <h3 className="mb-4 text-xl font-semibold">AI・機械学習</h3>
                <p>データ分析とAI技術を活用して、ビジネスの効率化と価値創造をサポートします。</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">プロジェクト</h2>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
            <motion.a
                href="https://www.meishiki-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-lg bg-white p-6 shadow-lg block"
              >
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/assets/meishiki.png"
                    alt="Meishiki AI"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold">命式AI</h3>
                </div>
                <p>LINE上でカジュアルな四柱推命診断ができるエンターテイメントアプリ</p>
              </motion.a>

              <motion.a
                href="https://www.sm3.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-lg bg-white p-6 shadow-lg block"
              >
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/assets/synergy-matchmaker.png"
                    alt="Synergy Matchmaker"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold">Synergy Matchmaker</h3>
                </div>
                <p>児童の心理特性に基づいて最適な班分けを数理最適化を用いて提案する学校教員向けのツール</p>
              </motion.a>

              <motion.a
                href="https://qpcr-tracer.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-lg bg-white p-6 shadow-lg block"
              >
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/assets/qpcr-tracer.png"
                    alt="qPCR Tracer"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold">qPCR Tracer</h3>
                </div>
                <p>qPCR実験における分注作業に伴う負担軽減を目指した実験初心者のためのガイドアプリ</p>
              </motion.a>

              <motion.a
                href="https://egov-viewer.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-lg bg-white p-6 shadow-lg block"
              >
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/assets/egov-viewer.webp"
                    alt="egov-viewer"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold">egov-viewer</h3>
                </div>
                <p>デジタル庁のeGov法令検索において法令参照が簡単に行えるGoogleChromeプラグイン</p>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Company Information Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">会社概要</h2>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-lg bg-gray-50 p-8 shadow-lg">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">株式会社インターメディア</h3>
                  <Image src="/assets/logo.png" alt="Intermedia Ltd. Logo" width={120} height={40} className="ml-4" />
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <div className="font-semibold">設立</div>
                    <div className="md:col-span-3">1992年3月17日</div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <div className="font-semibold">事業内容</div>
                    <div className="md:col-span-3">
                      <ul className="list-inside list-disc space-y-2">
                        <li>コンピューターのソフトウエア、ハードウエア研究開発設計及び製作販売</li>
                        <li>図書の出版及び販売</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <div className="font-semibold">代表取締役</div>
                    <ul className="list-inside list-none space-y-2">
                      <li>小嶋 忠詞</li>
                      <li>小嶋 忠茂</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <div className="font-semibold">資本金</div>
                    <div className="md:col-span-3">10,000,000円</div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <div className="font-semibold">取引先金融機関</div>
                    <ul className="list-inside list-none space-y-2">
                      <li>GMOあおぞら銀行</li>
                      <li>三菱UFJ銀行</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <div className="font-semibold">東京営業所</div>
                    <div className="md:col-span-3">東京都港区北青山1-3-1 アールキューブ青山3F</div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <motion.a
                    href="https://forms.gle/bTuAFTctLVz7Amkc6"
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block rounded-full bg-black px-8 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
                  >
                    お問い合わせ
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-secondary py-8 text-white">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Intermedia Ltd. All rights reserved.</p>
          </div>
        </footer>
      </main>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
