/* ============================================================
   HAVEN — haven-data.js
   Общие данные и оверлей для всех страниц
   ============================================================ */

/* ── БАЗА ОБЪЕКТОВ ─────────────────────────────────────────── */
var HAVEN_PROPERTIES = [
  {
    id:'villa-torrevieja', type:'house', deal:'buy', priceNum:1290000,
    images:['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80','https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'],
    ru:{badge:'Продажа',bc:'',name:'Вилла «Лагуна»',loc:'Torrevieja, Costa Blanca',price:'€ 1 290 000',priceNote:'Торг уместен',desc:'Роскошная вилла в 200 метрах от моря в Torrevieja. Панорамный вид на Средиземное море, частный бассейн с подогревом, сад с пальмами. Полностью отделана в средиземноморском стиле.',specs:[{i:'🛏',v:'5',l:'Спален'},{i:'📐',v:'380',l:'м²'},{i:'🌿',v:'800',l:'м² участок'},{i:'🏊',v:'1',l:'Бассейн'}],amen:['Бассейн с подогревом','Гараж на 3 машины','Вид на море','Терраса 120 м²','Умный дом','Сад с пальмами','Барбекю','Кондиционеры','Система полива','Охрана'],det:[['Тип','Вилла'],['Год','2018'],['Отделка','Дизайнерская'],['До моря','200 м'],['Район','Torrevieja'],['NIE','Помощь в оформлении']],deal:'Продажа',agent:'Carlos Ruiz',aRole:'Агент по Испании'},
    en:{badge:'For Sale',bc:'',name:'Villa Laguna',loc:'Torrevieja, Costa Blanca',price:'€ 1,290,000',priceNote:'Price negotiable',desc:'Luxurious villa 200 meters from the sea in Torrevieja. Panoramic Mediterranean views, heated pool, palm garden. Fully finished in Mediterranean style.',specs:[{i:'🛏',v:'5',l:'Bedrooms'},{i:'📐',v:'380',l:'m²'},{i:'🌿',v:'800',l:'m² plot'},{i:'🏊',v:'1',l:'Pool'}],amen:['Heated pool','3-car garage','Sea view','Terrace 120 m²','Smart home','Palm garden','BBQ','Air conditioning','Irrigation','Security'],det:[['Type','Villa'],['Year','2018'],['Finishing','Designer'],['To sea','200 m'],['Area','Torrevieja'],['NIE','Assistance']],deal:'For Sale',agent:'Carlos Ruiz',aRole:'Spain Agent'},
    es:{badge:'En Venta',bc:'',name:'Villa Laguna',loc:'Torrevieja, Costa Blanca',price:'€ 1.290.000',priceNote:'Precio negociable',desc:'Lujosa villa a 200 metros del mar en Torrevieja. Vistas panorámicas al Mediterráneo, piscina climatizada, jardín de palmeras. Totalmente terminada en estilo mediterráneo.',specs:[{i:'🛏',v:'5',l:'Dormitorios'},{i:'📐',v:'380',l:'m²'},{i:'🌿',v:'800',l:'m² parcela'},{i:'🏊',v:'1',l:'Piscina'}],amen:['Piscina climatizada','Garaje 3 coches','Vista al mar','Terraza 120 m²','Casa inteligente','Jardín palmeras','Barbacoa','Aire acondicionado','Riego','Seguridad'],det:[['Tipo','Villa'],['Año','2018'],['Acabado','Diseño'],['Al mar','200 m'],['Zona','Torrevieja'],['NIE','Asistencia']],deal:'En Venta',agent:'Carlos Ruiz',aRole:'Agente España'}
  },
  {
    id:'apt-punta-prima', type:'apartment', deal:'buy', priceNum:285000,
    images:['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1400&q=80','https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80','https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'],
    ru:{badge:'Новостройка',bc:'',name:'Апартаменты «Соль»',loc:'Punta Prima, Orihuela Costa',price:'€ 285 000',priceNote:'Ипотека от 3%',desc:'Апартаменты в закрытом жилом комплексе на первой линии в Punta Prima. Прямой вид на пляж, бассейн, SPA и подземный паркинг.',specs:[{i:'🛏',v:'2',l:'Спален'},{i:'📐',v:'95',l:'м²'},{i:'🌊',v:'50',l:'м до пляжа'},{i:'🏢',v:'3',l:'Этаж'}],amen:['Вид на море','Бассейн','SPA','Подземный паркинг','Терраса','Кондиционеры','Охраняемый комплекс','Лифт'],det:[['Тип','Апартаменты'],['Этаж','3 из 5'],['Сдача','2024'],['До пляжа','50 м'],['Ипотека','от 3%'],['NIE','Помощь']],deal:'Продажа',agent:'Carlos Ruiz',aRole:'Агент по Испании'},
    en:{badge:'New Build',bc:'',name:'Sol Apartments',loc:'Punta Prima, Orihuela Costa',price:'€ 285,000',priceNote:'Mortgage from 3%',desc:'Apartments in a gated first-line complex in Punta Prima. Direct sea view, pool, SPA and underground parking.',specs:[{i:'🛏',v:'2',l:'Bedrooms'},{i:'📐',v:'95',l:'m²'},{i:'🌊',v:'50',l:'m to beach'},{i:'🏢',v:'3',l:'Floor'}],amen:['Sea view','Pool','SPA','Underground parking','Terrace','Air conditioning','Gated complex','Elevator'],det:[['Type','Apartments'],['Floor','3 of 5'],['Completion','2024'],['To beach','50 m'],['Mortgage','from 3%'],['NIE','Assistance']],deal:'For Sale',agent:'Carlos Ruiz',aRole:'Spain Agent'},
    es:{badge:'Obra Nueva',bc:'',name:'Apartamentos Sol',loc:'Punta Prima, Orihuela Costa',price:'€ 285.000',priceNote:'Hipoteca desde 3%',desc:'Apartamentos en urbanización cerrada en primera línea en Punta Prima. Vista directa al mar, piscina, SPA y garaje subterráneo.',specs:[{i:'🛏',v:'2',l:'Dormitorios'},{i:'📐',v:'95',l:'m²'},{i:'🌊',v:'50',l:'m playa'},{i:'🏢',v:'3',l:'Planta'}],amen:['Vista al mar','Piscina','SPA','Garaje subterráneo','Terraza','Aire acondicionado','Urbanización cerrada','Ascensor'],det:[['Tipo','Apartamentos'],['Planta','3 de 5'],['Entrega','2024'],['A la playa','50 m'],['Hipoteca','desde 3%'],['NIE','Asistencia']],deal:'En Venta',agent:'Carlos Ruiz',aRole:'Agente España'}
  },
  {
    id:'villa-punta-prima', type:'house', deal:'buy', priceNum:780000,
    images:['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&q=80','https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80','https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80'],
    ru:{badge:'Продажа',bc:'',name:'Вилла «Мар»',loc:'Punta Prima, Alicante',price:'€ 780 000',priceNote:'',desc:'Изысканная вилла в тихом районе Punta Prima с частным бассейном и видами на море. Просторные террасы, ухоженный сад, современная кухня.',specs:[{i:'🛏',v:'4',l:'Спален'},{i:'📐',v:'280',l:'м²'},{i:'🌿',v:'600',l:'м² участок'},{i:'🏊',v:'1',l:'Бассейн'}],amen:['Бассейн','Сад','Гараж','Терраса 80 м²','Кондиционеры','Безопасность','Летняя кухня','Хамам'],det:[['Тип','Вилла'],['Год','2020'],['До пляжа','400 м'],['Район','Punta Prima'],['Парковка','2 машины'],['NIE','Помощь']],deal:'Продажа',agent:'Carlos Ruiz',aRole:'Агент по Испании'},
    en:{badge:'For Sale',bc:'',name:'Villa Mar',loc:'Punta Prima, Alicante',price:'€ 780,000',priceNote:'',desc:'Elegant villa in quiet Punta Prima with private pool and sea views. Spacious terraces, manicured garden, modern kitchen.',specs:[{i:'🛏',v:'4',l:'Bedrooms'},{i:'📐',v:'280',l:'m²'},{i:'🌿',v:'600',l:'m² plot'},{i:'🏊',v:'1',l:'Pool'}],amen:['Pool','Garden','Garage','Terrace 80 m²','Air conditioning','Security','Summer kitchen','Hammam'],det:[['Type','Villa'],['Year','2020'],['To beach','400 m'],['Area','Punta Prima'],['Parking','2 cars'],['NIE','Assistance']],deal:'For Sale',agent:'Carlos Ruiz',aRole:'Spain Agent'},
    es:{badge:'En Venta',bc:'',name:'Villa Mar',loc:'Punta Prima, Alicante',price:'€ 780.000',priceNote:'',desc:'Elegante villa en tranquila Punta Prima con piscina privada y vistas al mar. Amplias terrazas, jardín cuidado, cocina moderna.',specs:[{i:'🛏',v:'4',l:'Dormitorios'},{i:'📐',v:'280',l:'m²'},{i:'🌿',v:'600',l:'m² parcela'},{i:'🏊',v:'1',l:'Piscina'}],amen:['Piscina','Jardín','Garaje','Terraza 80 m²','Aire acondicionado','Seguridad','Cocina exterior','Hammam'],det:[['Tipo','Villa'],['Año','2020'],['A la playa','400 m'],['Zona','Punta Prima'],['Parking','2 coches'],['NIE','Asistencia']],deal:'En Venta',agent:'Carlos Ruiz',aRole:'Agente España'}
  },
  {
    id:'apt-torrevieja-rent', type:'apartment', deal:'rent', priceNum:1800,
    images:['https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1400&q=80','https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80','https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80'],
    ru:{badge:'Аренда',bc:'rent',name:'Апартаменты «Фиеста»',loc:'Torrevieja, Centro',price:'€ 1 800/мес',priceNote:'Счета отдельно',desc:'Уютные меблированные апартаменты в центре Torrevieja. 5 минут пешком до розовых озёр и набережной.',specs:[{i:'🛏',v:'3',l:'Спален'},{i:'📐',v:'110',l:'м²'},{i:'🌊',v:'300',l:'м до пляжа'},{i:'🏢',v:'4',l:'Этаж'}],amen:['Полная меблировка','Кондиционеры','Парковка','Терраса','Wi-Fi','Стиральная машина','Лифт','Близко к центру'],det:[['Тип','Апартаменты'],['Срок','От 3 мес.'],['Депозит','1 месяц'],['До пляжа','300 м'],['До центра','5 мин'],['NIE','Помощь']],deal:'Аренда',agent:'Carlos Ruiz',aRole:'Агент по Испании'},
    en:{badge:'For Rent',bc:'rent',name:'Fiesta Apartments',loc:'Torrevieja, Centro',price:'€ 1,800/mo',priceNote:'Utilities separate',desc:'Cozy furnished apartments in the centre of Torrevieja. 5 min walk to pink lakes and the promenade.',specs:[{i:'🛏',v:'3',l:'Bedrooms'},{i:'📐',v:'110',l:'m²'},{i:'🌊',v:'300',l:'m to beach'},{i:'🏢',v:'4',l:'Floor'}],amen:['Full furniture','Air conditioning','Parking','Terrace','Wi-Fi','Washing machine','Elevator','City centre'],det:[['Type','Apartments'],['Term','From 3 months'],['Deposit','1 month'],['To beach','300 m'],['To centre','5 min'],['NIE','Assistance']],deal:'For Rent',agent:'Carlos Ruiz',aRole:'Spain Agent'},
    es:{badge:'Alquiler',bc:'rent',name:'Apartamentos Fiesta',loc:'Torrevieja, Centro',price:'€ 1.800/mes',priceNote:'Suministros aparte',desc:'Acogedores apartamentos amueblados en el centro de Torrevieja. A 5 min a pie de los lagos rosas y el paseo.',specs:[{i:'🛏',v:'3',l:'Dormitorios'},{i:'📐',v:'110',l:'m²'},{i:'🌊',v:'300',l:'m playa'},{i:'🏢',v:'4',l:'Planta'}],amen:['Mobiliario completo','Aire acondicionado','Parking','Terraza','Wi-Fi','Lavadora','Ascensor','Centro ciudad'],det:[['Tipo','Apartamentos'],['Duración','Desde 3 meses'],['Depósito','1 mes'],['A la playa','300 m'],['Al centro','5 min'],['NIE','Asistencia']],deal:'Alquiler',agent:'Carlos Ruiz',aRole:'Agente España'}
  },
  {
    id:'apt-torrevieja-2', type:'apartment', deal:'buy', priceNum:165000,
    images:['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80','https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80','https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80'],
    ru:{badge:'Инвестиции',bc:'',name:'Квартира «Бриза»',loc:'Torrevieja, La Mata',price:'€ 165 000',priceNote:'Ипотека от 2.9%',desc:'Прекрасная квартира в живописном La Mata, Torrevieja. Рядом розовое и солёное озёра, пляжи с голубым флагом. Высокая ликвидность.',specs:[{i:'🛏',v:'2',l:'Спален'},{i:'📐',v:'72',l:'м²'},{i:'🌊',v:'150',l:'м до пляжа'},{i:'🏢',v:'2',l:'Этаж'}],amen:['Вид на озеро','Балкон','Кондиционеры','Парковка','Бассейн в комплексе','Лифт','Кладовая','Тихий район'],det:[['Тип','Квартира'],['Этаж','2 из 4'],['До пляжа','150 м'],['Район','La Mata'],['Ипотека','от 2.9%'],['NIE','Помощь']],deal:'Продажа',agent:'Carlos Ruiz',aRole:'Агент по Испании'},
    en:{badge:'Investment',bc:'',name:'Brisa Apartment',loc:'Torrevieja, La Mata',price:'€ 165,000',priceNote:'Mortgage from 2.9%',desc:'Beautiful apartment in scenic La Mata, Torrevieja. Pink and salt lakes nearby, blue flag beaches. High liquidity.',specs:[{i:'🛏',v:'2',l:'Bedrooms'},{i:'📐',v:'72',l:'m²'},{i:'🌊',v:'150',l:'m to beach'},{i:'🏢',v:'2',l:'Floor'}],amen:['Lake view','Balcony','Air conditioning','Parking','Complex pool','Elevator','Storage','Quiet area'],det:[['Type','Apartment'],['Floor','2 of 4'],['To beach','150 m'],['Area','La Mata'],['Mortgage','from 2.9%'],['NIE','Assistance']],deal:'For Sale',agent:'Carlos Ruiz',aRole:'Spain Agent'},
    es:{badge:'Inversión',bc:'',name:'Apartamento Brisa',loc:'Torrevieja, La Mata',price:'€ 165.000',priceNote:'Hipoteca desde 2,9%',desc:'Precioso apartamento en pintoresca La Mata, Torrevieja. Lagos rosa y salado cerca, playas bandera azul. Alta liquidez.',specs:[{i:'🛏',v:'2',l:'Dormitorios'},{i:'📐',v:'72',l:'m²'},{i:'🌊',v:'150',l:'m playa'},{i:'🏢',v:'2',l:'Planta'}],amen:['Vista laguna','Balcón','Aire acondicionado','Parking','Piscina complejo','Ascensor','Trastero','Zona tranquila'],det:[['Tipo','Apartamento'],['Planta','2 de 4'],['A la playa','150 m'],['Zona','La Mata'],['Hipoteca','desde 2,9%'],['NIE','Asistencia']],deal:'En Venta',agent:'Carlos Ruiz',aRole:'Agente España'}
  },
  {
    id:'villa-torrevieja-rent', type:'house', deal:'rent', priceNum:3500,
    images:['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80','https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80'],
    ru:{badge:'Аренда',bc:'rent',name:'Вилла «Азур»',loc:'Torrevieja, Los Balcones',price:'€ 3 500/мес',priceNote:'Сезон / год',desc:'Просторная вилла в районе Los Balcones, Torrevieja. Частный бассейн, большой сад с барбекю, вид на море. Полностью меблирована, готова к заезду.',specs:[{i:'🛏',v:'4',l:'Спален'},{i:'📐',v:'250',l:'м²'},{i:'🌿',v:'500',l:'м² участок'},{i:'🌊',v:'600',l:'м до пляжа'}],amen:['Бассейн','Сад','Барбекю','Гараж','Кондиционеры','Полная меблировка','Wi-Fi','Охрана'],det:[['Тип','Вилла'],['Срок','Сезон или год'],['Депозит','2 месяца'],['До пляжа','600 м'],['Район','Los Balcones'],['NIE','Помощь']],deal:'Аренда',agent:'Carlos Ruiz',aRole:'Агент по Испании'},
    en:{badge:'For Rent',bc:'rent',name:'Villa Azur',loc:'Torrevieja, Los Balcones',price:'€ 3,500/mo',priceNote:'Season / yearly',desc:'Spacious villa in Los Balcones, Torrevieja. Private pool, large garden with BBQ, sea view. Fully furnished, move-in ready.',specs:[{i:'🛏',v:'4',l:'Bedrooms'},{i:'📐',v:'250',l:'m²'},{i:'🌿',v:'500',l:'m² plot'},{i:'🌊',v:'600',l:'m to beach'}],amen:['Pool','Garden','BBQ','Garage','Air conditioning','Full furniture','Wi-Fi','Security'],det:[['Type','Villa'],['Term','Season or yearly'],['Deposit','2 months'],['To beach','600 m'],['Area','Los Balcones'],['NIE','Assistance']],deal:'For Rent',agent:'Carlos Ruiz',aRole:'Spain Agent'},
    es:{badge:'Alquiler',bc:'rent',name:'Villa Azur',loc:'Torrevieja, Los Balcones',price:'€ 3.500/mes',priceNote:'Temporada / anual',desc:'Espaciosa villa en Los Balcones, Torrevieja. Piscina privada, gran jardín con barbacoa, vista al mar. Completamente amueblada.',specs:[{i:'🛏',v:'4',l:'Dormitorios'},{i:'📐',v:'250',l:'m²'},{i:'🌿',v:'500',l:'m² parcela'},{i:'🌊',v:'600',l:'m playa'}],amen:['Piscina','Jardín','Barbacoa','Garaje','Aire acondicionado','Mobiliario completo','Wi-Fi','Seguridad'],det:[['Tipo','Villa'],['Duración','Temporada o anual'],['Depósito','2 meses'],['A la playa','600 m'],['Zona','Los Balcones'],['NIE','Asistencia']],deal:'Alquiler',agent:'Carlos Ruiz',aRole:'Agente España'}
  }
];

/* ── ОВЕРЛЕЙ — HTML вставляется в body каждой страницы ─────── */
function havenInjectOverlay() {
  var div = document.createElement('div');
  div.id = 'haven-overlay';
  div.innerHTML = [
    '<style>',
    '#haven-overlay{display:none;position:fixed;inset:0;background:var(--cream,#F5F0E8);z-index:9999;overflow-y:auto}',
    '#haven-overlay.active{display:block}',
    '.hov-back{position:sticky;top:0;z-index:10;background:#1A1714;padding:12px 48px;display:flex;align-items:center;gap:14px}',
    '.hov-back-btn{background:transparent;border:1px solid rgba(196,168,130,0.3);color:#F5F0E8;font-family:"DM Sans",sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;padding:9px 20px;cursor:pointer;transition:all .3s}',
    '.hov-back-btn:hover{border-color:#C4A882;color:#C4A882}',
    '.hov-back-title{color:rgba(245,240,232,0.45);font-size:13px;font-family:"DM Sans",sans-serif}',
    '.hov-gallery{display:grid;grid-template-columns:2fr 1fr;grid-template-rows:340px 200px;gap:3px}',
    '.hov-gm{grid-row:span 2;overflow:hidden}.hov-gs{overflow:hidden}',
    '.hov-gallery img{width:100%;height:100%;object-fit:cover;display:block}',
    '.hov-body{display:grid;grid-template-columns:1fr 360px;gap:48px;padding:48px 60px 96px;align-items:start}',
    '.hov-badge{display:inline-block;background:#C4A882;color:#1A1714;font-size:9px;letter-spacing:2px;text-transform:uppercase;padding:4px 14px;margin-bottom:16px}',
    '.hov-badge.rent{background:#8B7355;color:#F5F0E8}',
    '.hov-title{font-family:"Cormorant Garamond",Georgia,serif;font-size:clamp(32px,4vw,52px);font-weight:300;color:#1A1714;margin-bottom:10px;line-height:1.08}',
    '.hov-loc{font-size:14px;color:#6B6058;margin-bottom:32px}',
    '.hov-specs{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;margin-bottom:44px}',
    '.hov-spec{background:#EAE0D2;padding:20px 14px;text-align:center}',
    '.hov-spec-i{font-size:20px;margin-bottom:6px}',
    '.hov-spec-v{font-family:"Cormorant Garamond",Georgia,serif;font-size:26px;font-weight:300;color:#1A1714;line-height:1}',
    '.hov-spec-l{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#6B6058;margin-top:4px}',
    '.hov-stitle{font-family:"Cormorant Garamond",Georgia,serif;font-size:26px;font-weight:300;color:#1A1714;margin:36px 0 14px}',
    '.hov-desc{font-size:15px;line-height:1.85;color:#6B6058;font-weight:300;margin-bottom:28px}',
    '.hov-amen{display:grid;grid-template-columns:1fr 1fr;gap:8px 20px;margin-bottom:36px}',
    '.hov-amen-i{display:flex;align-items:center;gap:9px;font-size:13px;color:#1A1714;padding:7px 0;border-bottom:1px solid rgba(139,115,85,0.12)}',
    '.hov-amen-i::before{content:"✓";color:#C4A882;font-size:13px;flex-shrink:0}',
    '.hov-tbl{width:100%;border-collapse:collapse;margin-bottom:36px}',
    '.hov-tbl tr{border-bottom:1px solid rgba(139,115,85,0.12)}',
    '.hov-tbl td{padding:13px 0;font-size:13px}',
    '.hov-tbl td:first-child{color:#6B6058;width:45%}',
    '.hov-tbl td:last-child{color:#1A1714;font-weight:500}',
    '.hov-pcard{background:#1A1714;padding:32px 28px;position:sticky;top:58px}',
    '.hov-plabel{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#C4A882;margin-bottom:10px}',
    '.hov-pbig{font-family:"Cormorant Garamond",Georgia,serif;font-size:38px;font-weight:300;color:#F5F0E8;line-height:1;margin-bottom:6px}',
    '.hov-pnote{font-size:12px;color:rgba(245,240,232,0.35);margin-bottom:24px}',
    '.hov-pdiv{border:none;border-top:1px solid rgba(196,168,130,0.18);margin-bottom:20px}',
    '.hov-prow{display:flex;justify-content:space-between;margin-bottom:12px}',
    '.hov-prow span:first-child{font-size:12px;color:rgba(245,240,232,0.45)}',
    '.hov-prow span:last-child{font-size:12px;color:#F5F0E8}',
    '.hov-form{margin-top:24px;display:flex;flex-direction:column;gap:9px}',
    '.hov-inp{padding:12px 15px;background:rgba(255,255,255,0.06);border:1px solid rgba(196,168,130,0.15);outline:none;color:#F5F0E8;font-family:"DM Sans",sans-serif;font-size:13px;transition:border-color .3s}',
    '.hov-inp::placeholder{color:rgba(245,240,232,0.28)}.hov-inp:focus{border-color:#C4A882}',
    '.hov-send{background:#C4A882;color:#1A1714;border:none;padding:13px;font-family:"DM Sans",sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:background .3s;font-weight:500}',
    '.hov-send:hover{background:#d4b892}',
    '.hov-agent{margin-top:20px;display:flex;align-items:center;gap:12px;padding-top:18px;border-top:1px solid rgba(196,168,130,0.15)}',
    '.hov-av{width:40px;height:40px;border-radius:50%;background:#8B7355;display:flex;align-items:center;justify-content:center;color:#F5F0E8;font-size:15px;font-family:"Cormorant Garamond",Georgia,serif;flex-shrink:0}',
    '.hov-aname{font-size:13px;color:#F5F0E8}.hov-arole{font-size:10px;color:rgba(245,240,232,0.38);letter-spacing:1px;text-transform:uppercase;margin-top:2px}',
    '@media(max-width:960px){',
    '.hov-gallery{grid-template-columns:1fr;grid-template-rows:260px}.hov-gm{grid-row:span 1}.hov-gs{display:none}',
    '.hov-body{grid-template-columns:1fr;padding:24px 20px 60px;gap:28px}',
    '.hov-specs{grid-template-columns:repeat(2,1fr)}.hov-amen{grid-template-columns:1fr}',
    '.hov-pcard{position:static}.hov-back{padding:10px 18px}}',
    '</style>',
    '<div class="hov-back">',
    '  <button class="hov-back-btn" id="hov-back-btn">← <span id="hov-back-label">Назад</span></button>',
    '  <span class="hov-back-title" id="hov-back-sub">HAVEN</span>',
    '</div>',
    '<div class="hov-gallery">',
    '  <div class="hov-gm"><img id="hov-img0" src="" alt=""></div>',
    '  <div class="hov-gs"><img id="hov-img1" src="" alt=""></div>',
    '  <div class="hov-gs"><img id="hov-img2" src="" alt=""></div>',
    '</div>',
    '<div class="hov-body">',
    '  <div>',
    '    <div class="hov-badge" id="hov-badge"></div>',
    '    <div class="hov-title" id="hov-title"></div>',
    '    <div class="hov-loc" id="hov-loc"></div>',
    '    <div class="hov-specs" id="hov-specs"></div>',
    '    <div class="hov-stitle" id="hov-l-desc">Описание</div>',
    '    <p class="hov-desc" id="hov-desc"></p>',
    '    <div class="hov-stitle" id="hov-l-amen">Удобства</div>',
    '    <div class="hov-amen" id="hov-amen"></div>',
    '    <div class="hov-stitle" id="hov-l-det">Характеристики</div>',
    '    <table class="hov-tbl" id="hov-tbl"></table>',
    '  </div>',
    '  <div>',
    '    <div class="hov-pcard">',
    '      <div class="hov-plabel" id="hov-plabel">Стоимость</div>',
    '      <div class="hov-pbig" id="hov-price"></div>',
    '      <div class="hov-pnote" id="hov-pnote"></div>',
    '      <hr class="hov-pdiv">',
    '      <div class="hov-prow"><span id="hov-l-area">Площадь</span><span id="hov-d-area">—</span></div>',
    '      <div class="hov-prow"><span id="hov-l-rooms">Спален</span><span id="hov-d-rooms">—</span></div>',
    '      <div class="hov-prow"><span id="hov-l-floor">Этаж</span><span id="hov-d-floor">—</span></div>',
    '      <div class="hov-prow"><span id="hov-l-type">Сделка</span><span id="hov-d-type">—</span></div>',
    '      <div class="hov-form">',
    '        <input class="hov-inp" id="hov-inp-name" type="text" placeholder="Имя">',
    '        <input class="hov-inp" id="hov-inp-phone" type="tel" placeholder="Телефон">',
    '        <button class="hov-send" id="hov-send">Отправить заявку</button>',
    '      </div>',
    '      <div class="hov-agent">',
    '        <div class="hov-av">C</div>',
    '        <div><div class="hov-aname" id="hov-aname">Carlos Ruiz</div><div class="hov-arole" id="hov-arole">Агент</div></div>',
    '      </div>',
    '    </div>',
    '  </div>',
    '</div>'
  ].join('');
  document.body.insertBefore(div, document.body.firstChild);

  document.getElementById('hov-back-btn').addEventListener('click', havenCloseOverlay);
  document.getElementById('hov-send').addEventListener('click', function(){
    var btn = this;
    var t = HAVEN_UI[window.havenLang || 'ru'];
    btn.textContent = t.sendDone; btn.style.background='#5a7a50'; btn.disabled=true;
    setTimeout(function(){ btn.textContent=t.send; btn.style.background=''; btn.disabled=false; }, 4000);
  });
}

/* ── ОТКРЫТЬ ОБЪЕКТ ────────────────────────────────────────── */
function havenOpenProperty(id) {
  var p = HAVEN_PROPERTIES.find(function(x){ return x.id===id; });
  if(!p) return;
  var lang = window.havenLang || 'ru';
  var t = HAVEN_UI[lang];
  var pd = p[lang];

  document.getElementById('hov-img0').src = p.images[0];
  document.getElementById('hov-img1').src = p.images[1];
  document.getElementById('hov-img2').src = p.images[2];

  var badge = document.getElementById('hov-badge');
  badge.textContent = pd.badge;
  badge.className = 'hov-badge' + (pd.bc ? ' '+pd.bc : '');

  document.getElementById('hov-title').textContent = pd.name;
  document.getElementById('hov-loc').textContent = '📍 ' + pd.loc;

  var specs = document.getElementById('hov-specs');
  specs.innerHTML = '';
  pd.specs.forEach(function(s){
    specs.innerHTML += '<div class="hov-spec"><div class="hov-spec-i">'+s.i+'</div><div class="hov-spec-v">'+s.v+'</div><div class="hov-spec-l">'+s.l+'</div></div>';
  });

  document.getElementById('hov-l-desc').textContent = t.desc;
  document.getElementById('hov-desc').textContent = pd.desc;
  document.getElementById('hov-l-amen').textContent = t.amen;
  var amenEl = document.getElementById('hov-amen');
  amenEl.innerHTML = '';
  pd.amen.forEach(function(a){ amenEl.innerHTML += '<div class="hov-amen-i">'+a+'</div>'; });
  document.getElementById('hov-l-det').textContent = t.det;
  var tbl = document.getElementById('hov-tbl');
  tbl.innerHTML = '';
  pd.det.forEach(function(d){ tbl.innerHTML += '<tr><td>'+d[0]+'</td><td>'+d[1]+'</td></tr>'; });

  document.getElementById('hov-plabel').textContent = t.price;
  document.getElementById('hov-price').textContent = pd.price;
  document.getElementById('hov-pnote').textContent = pd.priceNote || '';
  document.getElementById('hov-l-area').textContent  = t.area;
  document.getElementById('hov-d-area').textContent  = pd.specs[1].v + ' м²';
  document.getElementById('hov-l-rooms').textContent = t.rooms;
  document.getElementById('hov-d-rooms').textContent = pd.specs[0].v;
  document.getElementById('hov-l-floor').textContent = t.floor;
  document.getElementById('hov-d-floor').textContent = pd.specs[2] ? pd.specs[2].v : '—';
  document.getElementById('hov-l-type').textContent  = t.dealType;
  document.getElementById('hov-d-type').textContent  = pd.deal;

  document.getElementById('hov-back-label').textContent = t.back;
  document.getElementById('hov-back-sub').textContent = t.backSub;
  document.getElementById('hov-inp-name').placeholder  = t.yourName;
  document.getElementById('hov-inp-phone').placeholder = t.yourPhone;
  var sendBtn = document.getElementById('hov-send');
  sendBtn.textContent = t.send; sendBtn.disabled = false; sendBtn.style.background = '';
  document.getElementById('hov-aname').textContent = pd.agent;
  document.getElementById('hov-arole').textContent = pd.aRole;

  var ov = document.getElementById('haven-overlay');
  ov.classList.add('active');
  ov.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function havenCloseOverlay() {
  document.getElementById('haven-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ── ПЕРЕВОДЫ ОВЕРЛЕЯ ─────────────────────────────────────── */
var HAVEN_UI = {
  ru:{ desc:'Описание', amen:'Удобства', det:'Характеристики', price:'Стоимость', area:'Площадь', rooms:'Спален', floor:'Этаж', dealType:'Тип сделки', back:'Назад', backSub:'Вернуться к объектам', yourName:'Ваше имя', yourPhone:'Телефон', send:'Отправить заявку', sendDone:'✓ Заявка отправлена' },
  en:{ desc:'Description', amen:'Amenities', det:'Details', price:'Price', area:'Area', rooms:'Bedrooms', floor:'Floor', dealType:'Deal type', back:'Back', backSub:'Return to listings', yourName:'Your name', yourPhone:'Phone', send:'Send Request', sendDone:'✓ Request Sent' },
  es:{ desc:'Descripción', amen:'Comodidades', det:'Características', price:'Precio', area:'Área', rooms:'Dormitorios', floor:'Planta', dealType:'Tipo', back:'Volver', backSub:'Volver a listados', yourName:'Su nombre', yourPhone:'Teléfono', send:'Enviar Solicitud', sendDone:'✓ Solicitud Enviada' }
};

/* ── СОХРАНЕНИЕ ЯЗЫКА ─────────────────────────────────────── */
window.havenLang = localStorage.getItem('haven_lang') || 'ru';

/* Сохранять язык при каждом переключении */
window.havenSetLang = function(lang) {
  window.havenLang = lang;
  localStorage.setItem('haven_lang', lang);
};

/* ── АВТОВОССТАНОВЛЕНИЕ ЯЗЫКА ─────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  var saved = localStorage.getItem('haven_lang') || 'ru';

  /* Перехватываем клики по кнопкам языка — сохраняем выбор */
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var l = btn.getAttribute('data-set-lang');
      if (l) {
        window.havenLang = l;
        localStorage.setItem('haven_lang', l);
      }
    });
  });

  /* Восстанавливаем язык после загрузки страницы */
  if (saved !== 'ru') {
    setTimeout(function() {
      if (typeof applyLang === 'function') {
        applyLang(saved);
      }
    }, 0);
  }
});

/* ── ЗАГРУЗКА ОБЪЕКТОВ ИЗ FIREBASE ────────────────────────────
   Если Firebase настроен — добавляем объекты из базы к стандартным.
   Если нет — работаем только со встроенными HAVEN_PROPERTIES.
   Функция вызывается автоматически при загрузке страницы.
───────────────────────────────────────────────────────────────  */
window.havenLoadFirebaseProps = function(callback) {
  // Проверяем что Firebase подключён и настроен
  if (typeof firebase === 'undefined') { callback([]); return; }
  if (!window.FIREBASE_CONFIG) { callback([]); return; }
  var cfg = window.FIREBASE_CONFIG;
  if (!cfg.apiKey || cfg.apiKey === 'ВСТАВЬ_СЮДА') { callback([]); return; }

  try {
    if (!firebase.apps.length) firebase.initializeApp(cfg);
    var db = firebase.database();

    // Читаем объекты из Firebase (один раз при загрузке страницы)
    db.ref('properties').once('value', function(snapshot) {
      var data = snapshot.val() || {};
      // Берём только активные (не проданные) объекты
      var activeProps = Object.values(data).filter(function(p){ return !p.sold; });
      callback(activeProps);
    }, function() {
      callback([]); // при ошибке — работаем без Firebase
    });
  } catch(e) {
    callback([]);
  }
};

/* Конвертируем объект из Firebase в формат HAVEN_PROPERTIES */
window.havenConvertProp = function(p) {
  return {
    id: p.id,
    type: p.type || 'apartment',
    deal: p.deal || 'buy',
    priceNum: p.priceNum || 0,
    images: [
      p.img || 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'
    ],
    ru: {
      badge: p.deal === 'rent' ? 'Аренда' : 'Продажа',
      bc: p.deal === 'rent' ? 'rent' : '',
      name: p.nameRu || p.nameEn || 'Объект',
      loc:  p.location || '—',
      price: p.priceDisplay || ('€ ' + (p.priceNum||0).toLocaleString('de-DE')),
      priceNote: '',
      desc: p.desc || '',
      specs: [
        { i: '🛏', v: p.beds  || '—', l: 'Спален' },
        { i: '📐', v: p.area  || '—', l: 'м²' },
        { i: '📍', v: (p.location||'').split(',')[0] || '—', l: 'Город' },
        { i: '🏠', v: p.type === 'house' ? 'Дом' : 'Кварт.', l: 'Тип' }
      ],
      amen: p.amenities || [],
      det: [
        ['Тип', p.type === 'house' ? 'Дом / Вилла' : 'Квартира'],
        ['Сделка', p.deal === 'rent' ? 'Аренда' : 'Продажа'],
        ['Цена', p.priceDisplay || '—'],
        ['Локация', p.location || '—'],
        ['Спален', p.beds || '—'],
        ['Площадь', (p.area ? p.area + ' м²' : '—')]
      ],
      deal: p.deal === 'rent' ? 'Аренда' : 'Продажа',
      agent: 'Carlos Ruiz', aRole: 'Агент по Испании'
    },
    en: {
      badge: p.deal === 'rent' ? 'For Rent' : 'For Sale',
      bc: p.deal === 'rent' ? 'rent' : '',
      name: p.nameEn || p.nameRu || 'Property',
      loc:  p.location || '—',
      price: p.priceDisplay || ('€ ' + (p.priceNum||0).toLocaleString('de-DE')),
      priceNote: '',
      desc: p.desc || '',
      specs: [
        { i: '🛏', v: p.beds  || '—', l: 'Bedrooms' },
        { i: '📐', v: p.area  || '—', l: 'm²' },
        { i: '📍', v: (p.location||'').split(',')[0] || '—', l: 'City' },
        { i: '🏠', v: p.type === 'house' ? 'House' : 'Apt.', l: 'Type' }
      ],
      amen: p.amenities || [],
      det: [
        ['Type', p.type === 'house' ? 'House / Villa' : 'Apartment'],
        ['Deal', p.deal === 'rent' ? 'For Rent' : 'For Sale'],
        ['Price', p.priceDisplay || '—'],
        ['Location', p.location || '—'],
        ['Bedrooms', p.beds || '—'],
        ['Area', (p.area ? p.area + ' m²' : '—')]
      ],
      deal: p.deal === 'rent' ? 'For Rent' : 'For Sale',
      agent: 'Carlos Ruiz', aRole: 'Spain Agent'
    },
    es: {
      badge: p.deal === 'rent' ? 'Alquiler' : 'En Venta',
      bc: p.deal === 'rent' ? 'rent' : '',
      name: p.nameEs || p.nameRu || 'Propiedad',
      loc:  p.location || '—',
      price: p.priceDisplay || ('€ ' + (p.priceNum||0).toLocaleString('de-DE')),
      priceNote: '',
      desc: p.desc || '',
      specs: [
        { i: '🛏', v: p.beds  || '—', l: 'Dormitorios' },
        { i: '📐', v: p.area  || '—', l: 'm²' },
        { i: '📍', v: (p.location||'').split(',')[0] || '—', l: 'Ciudad' },
        { i: '🏠', v: p.type === 'house' ? 'Casa' : 'Apto.', l: 'Tipo' }
      ],
      amen: p.amenities || [],
      det: [
        ['Tipo', p.type === 'house' ? 'Casa / Villa' : 'Apartamento'],
        ['Operación', p.deal === 'rent' ? 'Alquiler' : 'En Venta'],
        ['Precio', p.priceDisplay || '—'],
        ['Ubicación', p.location || '—'],
        ['Dormitorios', p.beds || '—'],
        ['Superficie', (p.area ? p.area + ' m²' : '—')]
      ],
      deal: p.deal === 'rent' ? 'Alquiler' : 'En Venta',
      agent: 'Carlos Ruiz', aRole: 'Agente España'
    }
  };
};
