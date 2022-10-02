export interface ISlice {
    isLoggedIn: boolean,
    isFetching: boolean
}

export interface LoginProps {
    login(): void
}