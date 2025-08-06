import { Routes } from '@angular/router';
import { AutenticarUsuario } from './pages/autenticar-usuario/autenticar-usuario';
import { CriarUsuario } from './pages/criar-usuario/criar-usuario';
import { ConsultarFinancas } from './pages/consultar-financas/consultar-financas';

export const routes: Routes = [
    {
        /* rota de navegação da página de autenticação */
        path: 'autenticar-usuario', component: AutenticarUsuario
    },
    {
        /* rota de navegação da página de cadastro */
        path: 'criar-usuario', component: CriarUsuario
    },
    {
        /* rota de navegação da página de consulta de finanças */  
        path: 'consultar-financas', component: ConsultarFinancas
    },
    {
        /* definie a rota inicial do projeto */
        path: '', pathMatch: 'full', redirectTo: '/autenticar-usuario'
    }
];
