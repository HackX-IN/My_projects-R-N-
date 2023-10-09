import { rootReducer, middlewares } from "./redux/root-reducers"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit"


export const store = configureStore({
    reducer: {
        ...rootReducer
    },

    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([...middlewares]),
})
setupListeners(store.dispatch)
export const RootState = store.getState()
