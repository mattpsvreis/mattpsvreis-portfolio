import { Button } from '@/components/base/button';
import imgError404 from '@assets/images/error-404.png';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='bg-brand-background_not_found flex h-screen w-full flex-col items-center justify-center gap-10 text-white'>
      <img src={imgError404} className='w-60' />
      <h1>
        <b>404</b> - Página não encontrada
      </h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link to='/'>
        <Button>Voltar ao inicio</Button>
      </Link>
    </div>
  );
}
