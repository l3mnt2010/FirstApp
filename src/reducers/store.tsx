// import { configureStore } from "@reduxjs/toolkit";
// import { RootState } from './store';

//  với js ta sẽ export nó luôn tại đây:
// export const store = configureStore({
//    reducer : {

//    },
// })

//còn trường hợp đối với typesc thì chúng ta cần phải định dạng phần type cho chúng:

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// chúng ta cần phải xuất ra kiểu type của RootState và AppDispath :

export type RootState = ReturnType<typeof store.getState>;

export type AppDispath = typeof store.dispatch;
