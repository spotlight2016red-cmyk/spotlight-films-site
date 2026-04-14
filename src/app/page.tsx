export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm tracking-[0.22em] text-neutral-200">
            SPOTLIGHT FILMS
          </a>
          <nav className="hidden gap-6 text-sm text-neutral-300 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#studio" className="hover:text-white">
              Studio
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs tracking-[0.3em] text-neutral-400">
              Tokushima, Japan
            </p>
            <h1
              className="mt-4 text-4xl tracking-wide md:text-6xl"
              style={{ fontWeight: 300 }}
            >
              SPOTLIGHT FILMS
            </h1>
            <p
              className="mt-6 max-w-2xl text-lg leading-[1.9] text-neutral-200 md:text-xl"
              style={{ fontWeight: 300 }}
            >
              Stories that carry light into the future.
              <br />
              物語に光を、人に可能性を。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-full bg-white/90 px-6 py-3 text-base font-medium text-neutral-950 shadow-sm transition-colors hover:bg-white sm:w-auto"
              >
                ご相談・ご連絡
              </a>
              <a
                href="#projects"
                className="inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-3 text-base font-medium text-neutral-100 transition-colors hover:bg-white/5 sm:w-auto"
              >
                プロジェクト
              </a>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="About" title="Story & Culture Studioとして">
          <p>
            SPOTLIGHT FILMSは徳島を拠点とする映像制作スタジオです。映画制作、地域文化の記録、上映会、対話、教育プロジェクトなどを通して、人の想いと地域の物語を未来へ残す活動を行っています。
          </p>
          <p className="pt-3">
            物語に光が当たると、自分の中にある本質や、忘れかけていた感覚が静かに立ち上がってくることがあります。自然な自分で生きられる人が少しずつ増えていくことで、身近な関係も、社会の空気も、ゆっくりと変わっていく。そんな変化の起点を、映画や対話、場づくりの時間の中に見つけています。
          </p>
          <h3 className="pt-6 text-lg tracking-wide text-white md:text-xl">
            人が人らしくある環境をつくる
          </h3>
          <p className="pt-3">
            映画をつくること自体が目的ではなく、人や地域、想いの中にある本質に光を当てながら、その人が自然な自分で生きられる状態を取り戻していける環境を育てることを目指しています。
          </p>
        </Section>

        <Section id="company" eyebrow="Company" title="合同会社SPOTLIGHT FILMS">
          <dl className="grid gap-5 pt-2 md:grid-cols-2 md:gap-x-10">
            <DefinitionTerm label="English Name" value="SPOTLIGHT FILMS LLC" />
            <DefinitionTerm label="Concept" value="Story & Culture Studio" />
            <DefinitionTerm label="Founder / Studio Director" value="山本晃大" />
            <DefinitionTerm label="Base" value="徳島県阿南市" />
          </dl>
        </Section>

        <Section id="studio" eyebrow="Studio" title="SPOTLIGHT STUDIO NAKATSUMINE">
          <p>
            徳島・中津峰のふもとにある古民家拠点をベースにした制作スタジオ。映画制作の企画、編集、上映会、対話、合宿など、人が集まり物語が生まれる場として育てていきます。
          </p>
          <h3 className="pt-6 text-lg tracking-wide text-white md:text-xl">
            山の反射光のように、物語を遠くへ届ける拠点
          </h3>
          <p className="pt-3">
            山の反射光のように、地域にある小さな物語に光を当て、映画として世界へ届ける場所です。ここから各地のロケーションへ出て、物語を探し、記録し、未来へつないでいきます。
          </p>
        </Section>

        <Section id="projects" eyebrow="Projects" title="映画から、場へ、文化へ">
          <p>
            SPOTLIGHT FILMSでは、映画制作を中心にしながら、地域文化の記録、上映会、対話、合宿、地域プロダクトなど、文化の循環につながる活動を広げていきます。
          </p>
          <div className="grid gap-5 pt-8 md:grid-cols-3">
            <Card title="Films">
              ドキュメンタリーや映画作品を通して、地域に眠る物語や人の想いを形にします。
            </Card>
            <Card title="Gatherings">
              上映会、対話、ワークショップ、合宿など、人が出会い、語り合う場をひらきます。
            </Card>
            <Card title="Culture Cycle">
              地域プロジェクト、農産物、プロダクト企画などを通して、文化と暮らしの循環を育てます。
            </Card>
          </div>
        </Section>

        <Section id="current-film" eyebrow="Current Film" title="残すということ">
          <p>
            祖父の世代が地域に残した桜並木や営みを起点に、「人はなぜ地域のために生きるのか」を探るドキュメンタリー。
          </p>
          <p className="pt-3 text-neutral-400">
            Documentary in Progress — 地域に残された想いと、未来への責任を見つめ直す映画プロジェクトです。
          </p>
          <div className="pt-8">
            <a
              href="https://nokosu-film.vercel.app/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-3 text-base font-medium text-neutral-100 transition-colors hover:bg-white/5"
              target="_blank"
              rel="noopener noreferrer"
            >
              映画LPを見る
            </a>
          </div>
        </Section>

        <Section id="family-project" eyebrow="Family Project" title="みかんの取り組み">
          <p>
            土地の恵みや暮らしの循環につながる取り組みとして、家族の農とものづくりの活動ともゆるやかに連携していきます。
          </p>
          <p className="pt-3 text-neutral-400">父のみかんサイト：準備中</p>
        </Section>

        <Section id="contact" eyebrow="Contact" title="ご相談・ご連絡">
          <p>
            映画制作、上映、地域プロジェクト、合宿などのご相談は、下記メールまでご連絡ください。
          </p>
          <div className="pt-8">
            <a
              href="mailto:info@spotlight-films.jp"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-neutral-800"
            >
              info@spotlight-films.jp
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 px-6 py-14">
        <div className="mx-auto max-w-5xl text-sm text-neutral-400">
          <p>© SPOTLIGHT FILMS</p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-white/10 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.3em] text-neutral-400">{eyebrow}</p>
        <h2
          className="mt-4 text-2xl leading-snug tracking-wide text-white md:text-3xl"
          style={{ fontWeight: 300 }}
        >
          {title}
        </h2>
        <div
          className="pt-8 text-lg leading-[1.9] text-neutral-200 md:text-xl md:leading-[1.9]"
          style={{ fontWeight: 300 }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

function DefinitionTerm({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <dt className="text-sm tracking-wide text-neutral-400">{label}</dt>
      <dd className="pt-2 text-lg text-neutral-100">{value}</dd>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-medium tracking-wide text-white">
        {title}
      </h3>
      <p className="pt-3 text-lg leading-[1.9] text-neutral-200">{children}</p>
    </div>
  );
}
