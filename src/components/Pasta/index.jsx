import { Folder } from 'lucide-react';
import * as S from './styles';

export { GridPastas, LinhaPastas } from './styles';

export default function Pasta({ imagemCapa, titulo = 'Sem título', quantidadeItens = 0, largura, compacto = false, onClick }) {
  return (
    <S.CartaoPasta $largura={largura} type="button" onClick={onClick}>
      <S.VisualizacaoPasta>
        {imagemCapa ? (
          <S.ImagemCapa src={imagemCapa} alt={`Capa da pasta ${titulo}`} />
        ) : (
          <Folder size={40} aria-hidden="true" />
        )}
      </S.VisualizacaoPasta>
      <S.InfoPasta $compacto={compacto}>
        <S.TituloPasta $compacto={compacto}>{titulo}</S.TituloPasta>
        <S.ContadorPasta $compacto={compacto}>+{quantidadeItens} PINS salvos</S.ContadorPasta>
      </S.InfoPasta>
    </S.CartaoPasta>
  );
}
