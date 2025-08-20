// ✅ نخلي الكود يستنى الصفحة تجهز
document.addEventListener("DOMContentLoaded", function () {
  // ✅ الباقات مع الأسعار (SDG + UGX)
  const packages = {
    freefire: [
      { value: "100", text: "100 جوهرة", sdg: 2000, ugx: 9000 },
      { value: "210", text: "210 جوهرة", sdg: 4000, ugx: 18000 },
      { value: "560", text: "560 جوهرة", sdg: 10000, ugx: 45000 },
      { value: "1150", text: "1150 جوهرة", sdg: 20000, ugx: 90000 }
    ],
    pubg: [
      { value: "60uc", text: "60 UC", sdg: 1500, ugx: 6800 },
      { value: "325uc", text: "325 UC", sdg: 6000, ugx: 27000 },
      { value: "660uc", text: "660 UC", sdg: 11000, ugx: 49500 },
      { value: "1800uc", text: "1800 UC", sdg: 25000, ugx: 112000 }
    ],
    mlbb: [
      { value: "86", text: "86 دايموند", sdg: 2200, ugx: 9900 },
      { value: "172", text: "172 دايموند", sdg: 4300, ugx: 19300 },
      { value: "257", text: "257 دايموند", sdg: 6500, ugx: 29200 }
    ],
    netflix: [
      { value: "1month", text: "1 شهر", sdg: 10000, ugx: 45000 },
      { value: "3months", text: "3 شهور", sdg: 27000, ugx: 121000 },
      { value: "6months", text: "6 شهور", sdg: 50000, ugx: 225000 }
    ]
  };

  const gameSelect = document.getElementById("game");
  const packageSelect = document.getElementById("package");
  const priceInput = document.getElementById("price");

  // ✅ تغيير اللعبة
  gameSelect.addEventListener("change", function () {
    packageSelect.innerHTML = '<option value="">-- اختر الباقة --</option>';
    priceInput.value = ""; // امسح السعر القديم

    const selectedGame = gameSelect.value;
    if (packages[selectedGame]) {
      packages[selectedGame].forEach(pkg => {
        const option = document.createElement("option");
        option.value = pkg.value;
        option.textContent = pkg.text;
        option.setAttribute("data-sdg", pkg.sdg);
        option.setAttribute("data-ugx", pkg.ugx);
        packageSelect.appendChild(option);
      });
    }
  });

  // ✅ تغيير الباقة يعرض السعر بالعملتين
  packageSelect.addEventListener("change", function () {
    const selectedOption = packageSelect.options[packageSelect.selectedIndex];
    const sdg = selectedOption.getAttribute("data-sdg") || "";
    const ugx = selectedOption.getAttribute("data-ugx") || "";
    if (sdg && ugx) {
      priceInput.value = `${sdg} SDG (≈ ${ugx} UGX)`;
    } else {
      priceInput.value = "";
    }
  });
});