import { array, number, object, string } from "yup";

export const eventsListSchema = object({
  eventCards: array()
    .of(
      object({
        id: string().required("ID события обязателен"),
        name: string().required("Название события обязательно"),
        startTime: string().required("Время начала обязательно"),
        endTime: string().required("Время окончания обязательно"),
        categories: array()
          .of(
            object({
              id: number()
                .required("ID категории обязателен")
                .positive("ID категории должен быть положительным числом"),
              name: string().required("Название категории обязательно"),
            }),
          )
          .required("Массив категорий обязателен"),
        directions: array()
          .of(
            object({
              id: number()
                .required("ID направления обязателен")
                .positive("ID направления должен быть положительным числом"),
              name: string().required("Название направления обязательно"),
            }),
          )
          .required("Массив направлений обязателен"),
        shortDescription: string().required("Краткое описание обязательно"),
      }),
    )
    .required("Массив событий обязателен"),
}).required("eventCards бязательное поле");
