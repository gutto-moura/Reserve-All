import { all } from "redux-saga/effects";
import reserve from "./reservas/sagas";

export function* rootSaga(){
    return yield all ([
        reserve,
    ])
}