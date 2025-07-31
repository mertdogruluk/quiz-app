
const questions = [
  {
    id: 1,
    question: "React nedir?",
    options: [
      "Bir programlama dili",
      "Kullanıcı arayüzleri oluşturmak için bir JavaScript kütüphanesi",
      "Bir veritabanı yönetim sistemi",
      "Bir CSS framework'ü"
    ],
    answer: "Kullanıcı arayüzleri oluşturmak için bir JavaScript kütüphanesi"
  },
  {
    id: 2,
    question: "React'te state ne işe yarar?",
    options: [
      "CSS dosyalarını yönetir",
      "Bileşenin dinamik verilerini saklar ve günceller",
      "API isteklerini durdurur",
      "HTML yapısını oluşturur"
    ],
    answer: "Bileşenin dinamik verilerini saklar ve günceller"
  },
  {
    id: 3,
    question: "React'te 'props' kavramı neyi ifade eder?",
    options: [
      "Bileşenlerin kendi içindeki durumu",
      "Fonksiyonların return değerini",
      "Bileşenlere dışarıdan veri ve özellik aktarılmasını",
      "CSS class isimlerini"
    ],
    answer: "Bileşenlere dışarıdan veri ve özellik aktarılmasını"
  },
  {
    id: 4,
    question: "React uygulamasında bileşenleri render etmek için hangi dosyada genellikle 'root' elemanı bulunur?",
    options: [
      "App.jsx",
      "index.html",
      "main.css",
      "data.js"
    ],
    answer: "index.html"
  },
  {
    id: 5,
    question: "React'te useEffect hook'u ne için kullanılır?",
    options: [
      "Bileşenin ilk yüklenmesinde ve güncellenmesinde yan etkileri yönetmek için",
      "CSS stillerini değiştirmek için",
      "Yeni bileşen oluşturmak için",
      "JavaScript dosyalarını import etmek için"
    ],
    answer: "Bileşenin ilk yüklenmesinde ve güncellenmesinde yan etkileri yönetmek için"
  }
];

export function getShuffledQuestions() {
  return questions
    .map((q) => ({ ...q })) 
    .sort(() => Math.random() - 0.5); 
}
