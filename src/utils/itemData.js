const getEnglishText = languages => {
  return languages['en_US'];
};

const getItemData = data => {  
  const itemData = {
    id: data.id,
    name: getEnglishText(data.name),
    quality: getEnglishText(data.quality.name),
    level: data.level,
    requiredLevel: data.required_level,
    mediaKey: data.media.key.href,
    class: getEnglishText(data.item_class.name),
    subclass: getEnglishText(data.item_subclass.name),
    slot: getEnglishText(data.inventory_type.name)
  };

  console.log(itemData);

  return itemData;
};

module.exports = getItemData;
