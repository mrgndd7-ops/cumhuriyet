import type { Article } from "@/types";

/**
 * Ana sayfada hero olarak gösterilecek manuel haber.
 * Başlık, yazar, görsel ve içeriği buradan düzenleyin.
 * Haber sayfası: /ozel
 */
export const FEATURED_ARTICLE: Article = {
  id: "featured-001",
  slug: "ozel",
  title: "Bu Adaletsizliğe Dur Diyen Kimse Olmayacak Mı?",
  description:
    "Hukukun temel taşlarından biri olan 'borcun şahsiliği' ilkesi, bazı hukuk bürolarının agresif ve hukuk dışı tahsilat yöntemleri nedeniyle ağır darbe alıyor.",
  content: `<p>Hukukun temel taşlarından biri olan "borcun şahsiliği" ilkesi, bazı hukuk bürolarının agresif ve hukuk dışı tahsilat yöntemleri nedeniyle ağır darbe alıyor. Son dönemde artan şikayetler, alacak tahsilatı sürecinin profesyonel bir süreçten ziyade, organize bir <em>itibar suikastına</em> dönüştüğünü gösteriyor. Özellikle "açık hat" olarak tabir edilen ve kime ait olduğu belirsiz numaralar üzerinden yürütülen bu operasyonlar, hukuk sistemine olan güveni sarsıyor.</p>

<h3>Sistematik Taciz: Kanunlar Hiçe Sayılıyor</h3>
<p>İcra ve İflas Kanunu ile Kişisel Verilerin Korunması Kanunu (KVKK), bir alacağın tahsil edilme şeklini net çizgilerle belirlemiştir. Ancak iddialara göre, söz konusu yapı bu sınırları kasten ihlal ederek borçluyu toplumsal çevresinde <em>küçük düşürme</em> stratejisi izliyor.</p>
<ul>
  <li><strong>Üçüncü Şahısların Hedef Alınması:</strong> Borçlunun ailesi, eşi, dostu ve hatta yakın çevresi aranarak dosya hakkında bilgi veriliyor. Bu durum, hem özel hayatın gizliliğini ihlal ediyor hem de kişiyi sosyal bir lince maruz bırakıyor.</li>
  <li><strong>Hukuk Dışı Bilgilendirme:</strong> Aile fertlerine, hiçbir yasal dayanağı olmadığı halde borçlu adına hapis veya ağır yaptırım uygulanacağı yönünde yanıltıcı ve korkutucu beyanlarda bulunuluyor.</li>
  <li><strong>Zaman Sınırı İhlali:</strong> Yasaların belirlediği makul saatlerin dışındaki aramalarla aile huzuru sistematik olarak bozuluyor.</li>
</ul>

<h3>"Açık Hat" Kurnazlığı: Sorumluluktan Kaçma Çabası</h3>
<p>Hukuk bürolarının kurumsal ve kayıtlı hatları yerine, takip edilmesi güç olan <em>"açık hatlar"</em> kullanması, art niyetin en somut göstergesi. Bu yöntemle:</p>
<ol>
  <li>Baro denetimlerinden ve meslek etik kurallarından kaçılmaya çalışılıyor.</li>
  <li>Olası bir şikayette "numara kurumumuza ait değil" diyerek yasal sorumluluk reddediliyor.</li>
  <li>Borçlu üzerinde, profesyonel bir kurumdan ziyade kayıt dışı bir yapı tarafından aranıyormuş algısı yaratılarak korku iklimi oluşturuluyor.</li>
</ol>

<h3>Hukukçuların Görüşü: "Bu Bir Hak Arama Değil, Suçtur"</h3>
<p>Hukuk etiği uzmanları, alacaklı vekilinin görev sınırlarını hatırlatarak bu tür faaliyetlerin Türk Ceza Kanunu kapsamında <em>"Kişilerin Huzur ve Sükununu Bozma"</em> ve <em>"Kişisel Verileri Hukuka Aykırı Ele Geçirme"</em> suçlarını oluşturduğunu belirtiyor. Avukatlık mesleği, borçluyu rencide ederek veya çevresini taciz ederek tahsilat yapma aracı olarak kullanılamaz.</p>

<h3>Mağduriyet Karşısında Yasal Adımlar</h3>
<p>Bu tarz hukuk dışı yöntemlerle karşı karşıya kalan bireylerin sessiz kalmaması gerektiğini vurgulayan uzmanlar, şu adımların atılmasını öneriyor:</p>
<ul>
  <li><strong>Delil Toplama:</strong> Gelen aramaların numaralarını, saatlerini ve konuşma içeriklerini kayıt altına alın.</li>
  <li><strong>Baro ve Savcılık Başvurusu:</strong> İlgili büronun bağlı olduğu Baro Başkanlığına ve Cumhuriyet Başsavcılığına ivedilikle suç duyurusunda bulunun.</li>
  <li><strong>KVKK Şikayeti:</strong> Aile bireylerinin iletişim bilgilerinin izinsiz kullanılması nedeniyle Kişisel Verileri Koruma Kurulu'na başvurun.</li>
</ul>

<p><em>Sonuç olarak;</em> adalet mekanizmasının bir parçası olan hukuk bürolarının, "tahsilat odaklı" baskı merkezlerine dönüşmesi kabul edilemez. Kamuoyu, bu yöntemleri kullananların hukuki zeminde hesap vermesi için haklarını aramaya davet ediliyor.</p>`,
  author: "Defne Akar",
  publishedAt: new Date().toISOString(),
  imageUrl: "/images/featured.jpg",
  imageAlt: "Şatır & Tonbul Avukatlık Bürosu Google yorumları",
  category: { slug: "gundem", label: "Özel", feedUrls: [] },
  tags: [],
  sourceUrl: "/ozel",
  sourceName: "Cumhuriyet Sesi",
  readingTimeMinutes: 5,
};
