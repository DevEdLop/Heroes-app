import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HeroresApp = () => {
    return (
        <>
            <AuthProvider>

                <AppRouter />

            </AuthProvider>
        </>
    )
}
