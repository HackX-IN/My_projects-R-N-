import authReducer from './slice/auth-slice';
import { authApi } from "./rtk-query/auth";
import { tripsApi } from './rtk-query/trips';

export const rootReducer = {
  // ...your other reducers here
  auth: authReducer,
};

if (authApi) {
  rootReducer[authApi.reducerPath] = authApi.reducer;
}

if (tripsApi) {
  rootReducer[tripsApi.reducerPath] = tripsApi.reducer;
}

export const middlewares = [];

if (authApi) {
  middlewares.push(authApi.middleware);
}

if (tripsApi) {
  middlewares.push(tripsApi.middleware);
}
