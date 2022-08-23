import { all } from "redux-saga/effects";
import reserve from "./reservas/reducer";

export function* rootSaga(){
    return yield all ([
        reserve,
    ])
}