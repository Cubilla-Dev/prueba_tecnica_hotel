import { createBrowserRouter } from "react-router-dom";
import Reserva from "../componentes/Crea_reservas/Reserva";
import RegisUsuario from "../componentes/home/RegisUsuario";

import { RUTA_HOME, RUTA_VERIFICACION_RESERVA, RUTA_RESERVA,  } from "./routerPath";
import EnlistarReserva from "../componentes/Ver_reservas/EnlistarReserva";



const router = createBrowserRouter([
    {
        path: RUTA_HOME,
        element: <RegisUsuario/>,
    },
    {
        path: RUTA_RESERVA,
        element: <Reserva/>,
    },
    {
        path: RUTA_VERIFICACION_RESERVA,
        element: <EnlistarReserva/>,
    },
]);

export default router;