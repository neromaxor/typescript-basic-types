// Оригінальний тип
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// Використовуємо generics та Pick для типізації
export function compare<
  T extends Pick<AllType, "name" | "color">,
  U extends Pick<AllType, "position" | "weight">
>(top: T, bottom: U): AllType {
  return {
    name: top.name, // беремо 'name' з параметра top
    color: top.color, // беремо 'color' з параметра top
    position: bottom.position, // беремо 'position' з параметра bottom
    weight: bottom.weight, // беремо 'weight' з параметра bottom
  };
}

// Приклад використання:
