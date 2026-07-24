# 精品酒款品牌展示網站 Wineshop Platform

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Material Icons](https://img.shields.io/badge/Material_Icons-757575?style=for-the-badge&logo=google&logoColor=white)](https://fonts.google.com/icons)

## 專案簡介

這是一個為「新酒節限時 72 小時」活動設計的完整電商網頁，整合了真實商品圖片與現代化的 UI 設計。專案採用純前端技術實現，無需後端即可展示完整的電商頁面效果。

- 依據法律規定，未滿 18 歲者，禁止購買及飲用酒類。
- 請理性飲酒，酒後不開車，安全有保障。

## 專案特色

- 高品質圖片素材：使用 Unsplash 免費授權圖片，提升品牌展示質感
- Material Design Icons：Google Material Icons 提供專業圖示系統
- 完整 RWD 設計：三種裝置尺寸完美適配
- 純前端實現：無需後端，開箱即用
- 豐富互動效果：Hover、動畫、即時回饋

## 核心功能

- 酒款展示
- 品牌活動宣傳
- 價格資訊呈現
- 商品視覺展示
- 品牌形象建立

本網站定位為品牌展示頁，不包含購物車、會員系統、付款及訂單功能。

## 技術架構

- HTML5：網頁結構與語意化標籤
- CSS3：版面設計與動畫效果
- JavaScript：網頁互動功能
- Git：版本控制
- Vercel：網站部署

## 專案架構

```
wineshop-platform/
│
├── index.html             # 主頁面
│
├── css/
│   └──style.css
│
├── js/
│   └──main.js
│
├── README.md              # 專案說明文件
│
└── assets/                # 圖片資源目錄
    ├── hero.jpg
    ├── edm-header.jpg
    ├── product1.jpg
    ├── product2.jpg
    ├── product3.jpg
    ├── product4.jpg
    ├── product5.jpg
    ├── product6.jpg
    ├── product7.jpg
    ├── product8.jpg
    └── product9.jpg
```

## 安裝與執行

### 前置需求

- 現代瀏覽器（Chrome 90+, Firefox 88+, Safari 14+）
- 圖片素材（參考上方「圖片檔案要求」）
- 基本的 HTML/CSS 知識

### 安裝步驟

#### 方法一：直接下載

1. 下載專案

   ```
   # 下載 ZIP 或 Clone 專案
   git clone https://github.com/tina0326-88/wineshop-platform.git
   cd wineshop-platform
   ```

2. 準備圖片資源

   ```
   # 建立 assets 資料夾
   mkdir assets

   # 將 11 張圖片放入 assets 資料夾
   # hero.jpg, edm-header.jpg, product1-9.jpg
   ```

3. 開啟網頁

   ```
   # 方式 1: 直接開啟
   open index.html

   # 方式 2: VS Code Live Server
   # 右鍵 index.html → Open with Live Server
   ```

#### 方法二：線上編輯

1. 使用 [CodePen](https://codepen.io/) 或 [JSFiddle](https://jsfiddle.net/)
2. 將 HTML 貼入編輯器
3. 圖片使用線上圖床（如 Imgur、Unsplash）

## 瀏覽器支援

### 完整支援

| 瀏覽器  | 版本 | 說明             |
| ------- | ---- | ---------------- |
| Chrome  | 90+  | 完整支援所有功能 |
| Firefox | 88+  | 完整支援所有功能 |
| Safari  | 14+  | 完整支援所有功能 |
| Edge    | 90+  | 完整支援所有功能 |
| Opera   | 76+  | 完整支援所有功能 |

### 部分支援

| 瀏覽器     | 版本 | 說明                       |
| ---------- | ---- | -------------------------- |
| Safari     | 13   | backdrop-filter 需要加前綴 |
| iOS Safari | 13+  | 部分毛玻璃效果可能不顯示   |

### 不支援

| 瀏覽器       | 說明                         |
| ------------ | ---------------------------- |
| IE 11        | 不支援 CSS Grid, Flexbox gap |
| IE 10 及以下 | 完全不支援                   |

### 功能相容性

```
 CSS Grid Layout          (所有現代瀏覽器)
 Flexbox                  (所有現代瀏覽器)
 CSS Transform/Transition (所有現代瀏覽器)
 Filter 濾鏡　　　　　　　　(所有現代瀏覽器)
 Backdrop-filter   　　　　(Safari 需要 -webkit- 前綴) 　  　
 object-fit　　　　　　　　(所有現代瀏覽器)
 ES6 JavaScript         　(所有現代瀏覽器)
```

## 注意事項

### 1. 圖片資源

**必須準備圖片檔案**

```
 錯誤：沒有準備圖片 → 頁面顯示空白或破圖
 正確：準備 11 張圖片放入 assets/ 資料夾
```

**圖片命名規則**

- 嚴格遵循檔名：`hero.jpg`, `edm-header.jpg`, `product1.jpg` 等
- 大小寫敏感（Linux/Mac）
- 不可使用空格或特殊字元

### 2. Material Icons

**需要網路連線**

```html
<!-- 此行需要網路載入 -->
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

**離線使用方案：**

1. 下載 Material Icons 字體檔
2. 自行託管（self-hosted）
3. 或改用 SVG 圖示

### ３. 效能考量

**圖片優化建議**

```
使用 WebP 格式（更小的檔案大小）
壓縮圖片（TinyPNG、ImageOptim）
設定適當的尺寸（避免載入過大圖片）
考慮使用 lazy loading
```

### 外部資源

- Google Material Icons
  ```html
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  ```
- Google Fonts (Noto Sans TC)
  - 預設字體家族：`'Noto Sans TC', -apple-system, sans-serif`

## 致謝

### 圖片來源

- 本專案所有展示圖片皆來自 **Unsplash**，僅供作品展示與學習用途。
- 圖片來源：https://unsplash.com/
- 感謝 Unsplash 與所有攝影師提供高品質免費圖片。

### 技術資源

- [Unsplash](https://unsplash.com/) - 專案圖片素材來源
- [Google Material Icons](https://fonts.google.com/icons) - 圖示系統
- [Google Fonts](https://fonts.google.com/) - Noto Sans TC 字體
- [MDN Web Docs](https://developer.mozilla.org/) - HTML、CSS、JavaScript 技術文件

### 設計靈感

- 參考現代電商網站設計趨勢
- Material Design 設計語言

## 版權聲明

此專案僅供個人學習與紀錄使用，無授權任何學習教材用途與商業用途。
