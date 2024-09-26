// Описуємо тип для користувача (дані реєстрації)
type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

// Створюємо функцію для оновлення профілю користувача
// Використовуємо Partial для того, щоб зробити всі поля необов'язковими
export function updateUserProfile<T extends Partial<UserProfile>>(
  existingProfile: UserProfile,
  updates: T
): UserProfile {
  return {
    ...existingProfile, // зберігаємо поточні значення
    ...updates, // оновлюємо лише ті значення, які були передані
  };
}

// Приклад існуючого профілю користувача
export const currentProfile: UserProfile = {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  password: "securepassword123",
};
