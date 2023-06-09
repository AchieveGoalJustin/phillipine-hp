import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

const s3 = PUBLIC_IMAGE_BUCKET_URL;

console.log(s3 + "images/images/UCHIJIMAT.webp");

export type TestimonialProfile = {
  img: string;
  imgAlt: string;
  name: string;
  scoreUp: string;
  course: string;
  results: string;
  major: string;
  quote: string;
  fullQuote: string[];
};

const 西野: TestimonialProfile = {
  img: s3 + "images/images/NISHINOT.webp",
  imgAlt: "西野傑しんさん",
  name: "西野 傑しん",
  scoreUp: "370",
  course: "2021～2022年　グループレッスン受講",
  results: "TOEICスコア495点⇒850点",
  major: "経営学部２年",
  quote:
    "この講座を受けて、スピーキングが一番大事ということをさらに確信しました。",
  fullQuote: [
    "この講座を受講しようと思ったのは、英語でのコミュニケーション能力を向上させ、英語を話す機会が欲しかったからです。",
    "TOEICテストやTOEFLテストの点数が高くても、実際に使ってみると、言いたいことを思うように話せない人が多いのではないでしょうか？",
    "生活の中で、リスニングとスピーキングはリーディングとライティングよりも実用的だと思い、その能力を向上させたいと思いました。",
    "語学は他の教科とは違うと思います。高校でも、大学でも、勉強している科目が将来の仕事と必ずしも繋がれるとは限りませんが、語学を学ぶことは、将来どのような仕事に就いても必ず役に立つと思います。",
    "この講座は、楽しくリラックスした雰囲気の中で英語を学ぶことができ、学習意欲が大幅に向上できると思います。",
    "また、英語は私たちにとって外国語であるため、誰もが語彙や文法のミスがあります",
    "このため、プレッシャーをほとんど感じずに、自分の言いたいことを言うことができるところがいいところです。",
    "この講座を受けて、スピーキングが一番大事ということをさらに確信しました。",
    "自分の将来は必ず自分で作らなければならないです。そのため、英語を学ぶことで将来の可能性を増やしましょう！！",
  ],
};

const 池田: TestimonialProfile = {
  img: s3 + "images/images/IKEDAT.webp",
  imgAlt: "池田優香さん",
  name: "池田 優香",
  scoreUp: "160",
  course: "2021～2022年　マンツーマンレッスン受講",
  results: "TOEICスコア460点⇒625点、IELTS4.5⇒5.0",
  major: "国際観光学部２年",
  quote:
    "英語の発音の仕方や応用の仕方、プレゼンの仕方までたくさんのことを学ぶことができます。",
  fullQuote: [
    "大学入学時から英語を学びたい、留学に行きたいと考えていました。しかし、入学時は新型コロナウイルスが流行しており、留学に行くことはできない状況でした。",
    "そこでToyoNet-ACEでこのToyo Achieve Englishを見つけ、留学はできないけど英語で話す機会を増やして、いざ留学するときに役立てようと思い、マンツーマンレッスンを受講しました。",
    "私が受講したマンツーマンレッスンは、わからないところや理解できないところをすぐに聞くことができるのでとてもいいと思います。",
    "また、英語の発音の仕方や応用の仕方、プレゼンの仕方までたくさんのことを学ぶことができます。",
    "毎回TOIEC Vocabularyがあるので、３つの単語の意味を調べたり、例文を作ったり、ただ単語を覚えるだけでなく、使えるように覚えることができているので、とても役に立っています。",
    "また、マンツーマンレッスンだったので教科書だけでなく、IELTSなどの自分がやりたい勉強も教えてくれました。今度は、グループレッスンに挑戦したいと思います。",
    "高校までは英語に苦手意識があり、テストに向けて勉強していましたが、大学に入り、英語ができるようになりたいと思い、日常的に英語を勉強するようになりました。",
    "大学は、高校までと違い、自分で学びを深めていく場所です。",
    "私も最初はなかなか勇気が出なく挑戦することを躊躇っていましたが、この講座を通して、挑戦することができました。",
    "英語を学びたいという方はぜひ挑戦してみてください。",
  ],
};

const 内島: TestimonialProfile = {
  img: s3 + "images/images/UCHIJIMAT.webp",
  imgAlt: "内島 龍也さん",
  name: "内島 龍也",
  scoreUp: "400",
  course: "2020年度 グループレッスン受講",
  results: "TOEICスコア （受講前）470点⇒（受講後）870点",
  major: "経済学部３年",
  quote:
    "先生は、いつも笑顔で明るくて、ミスを恐れず発言できる環境を作ってくれました。",
  fullQuote: [
    "留学準備としてスピーキングの力を伸ばすために受講しました。",
    "自分の考えを英語で伝えることが出来ないことに危機感を覚えていましたが、この講座を受講して毎日40分英語に触れることができたので、とても英語力が上がりました。",
    "先生は、いつも笑顔で明るくて、ミスを恐れず発言できる環境を作ってくれました。またグループレッスンでメンバーと一緒に楽しみながら英語を学ぶことができました。",
    "一方で、日々のレッスンで英語をスラスラ喋れないことによる悔しさが、自宅での英語学習に対する意識を変えました。",
    "これから留学を考えている方や英語力を高めて何かをしたい方は、ぜひ講座の受講をオススメします。",
    "英語を聞いたり見たりすることはあっても、喋ることはあまり無いと思うので英語力を楽しみながら高めることができます。",
    "また、自分自身講座を通じて海外への興味や英語に対する苦手意識が変わったので、少しでも興味がある方は受講してみると色々な学びや発見があると思います。",
  ],
};

const 関口: TestimonialProfile = {
  img: s3 + "images/images/SEKIGUCHIT.webp",
  imgAlt: "関口 夕貴さん",
  name: "関口 夕貴",
  scoreUp: "480",
  course: "2019～2021年度 マンツーマンレッスン受講",
  results: "TOEICスコア（受講前）420点⇒（受講後）900点",
  major: "国際文化コミュニケーション学科 ３年",
  quote:
    "フレンドリーな先生を中心に生徒同士も仲良くなれるので、恥ずかしがらずに会話できます。",
  fullQuote: [
    "入学当初の私は受験勉強のおかげで文法こそできたものの、「英語で話す」ことは全くできませんでした。",
    "そのため、授業の空きコマを利用して英会話が学べるこの講座を受講しようと思いました。",
    "この講座の一番の利点は「話しやすい環境」が整っている事だと思います。",
    "フレンドリーな先生を中心に生徒同士も仲良くなれるので、恥ずかしがらずに会話できます。",
    "また、英語で上手く言えない時でも先生は必ず待ってくれるし、言えるようにヒントも与えてくれます。",
    "最初は英語を聞き取るだけでも大変でしたが、秋学期にはかなり聞き取れるようになり、２年生からは楽しんで会話できるようになったと自身の成長を感じています。",
    "入学当初は420点だったTOEICは900点まで上がりました。",
    "さらに、昨年度英検準一級にも合格し、今は英検一級に向けて勉強中です。",
    "海外留学をして英語力を高めることもできますが、国内で気軽に英会話を楽しめる場所はすぐ目の前にあります。",
    "受講を迷っているなら絶対受講したほうがいいです！",
  ],
};

export const data: TestimonialProfile[] = [西野, 内島, 関口, 池田];
