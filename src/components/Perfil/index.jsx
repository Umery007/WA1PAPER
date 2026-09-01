import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Pencil, Maximize2, Minimize2, Folder } from 'lucide-react';
import imagemPadraoBanner from '../../assets/perfil/pages.png';
import * as S from './styles';

export default function Perfil({
  imagemBanner = imagemPadraoBanner,
  imagemAvatar,
  dadosPastas = []
}) {
  const [abaAtiva, setAbaAtiva] = useState('criados');
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.SecaoBanner>
        {imagemBanner ? (
          <S.ImagemBanner src={imagemBanner} alt="Banner" />
        ) : (
          <S.BannerPadrao />
        )}

        <S.BotaoVoltar aria-label="Voltar" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} color="#fff" />
        </S.BotaoVoltar>

        <S.CartaoPerfil>
          <S.ContainerAvatar>
            {imagemAvatar && <S.ImagemAvatar src={imagemAvatar} alt="Avatar" />}
          </S.ContainerAvatar>

          <S.DetalhesUsuario>
            <S.CabecalhoUsuario>
              <S.NomeUsuario>Person1</S.NomeUsuario>
              <S.BotaoEditar>
                <Pencil size={12} />
                <span>Editar perfil</span>
              </S.BotaoEditar>
            </S.CabecalhoUsuario>

            <S.BioUsuario>
              csfalknjdnbfjkghsdvjzgbsfvbfs,n ..fmn kjvndjgbdbdh!,xhkvhjhdjfndhsdjgs
            </S.BioUsuario>

            <S.ContainerEstatisticas>
              <S.CaixaEstatistica>
                <S.RotuloEstatistica>Seguindo</S.RotuloEstatistica>
                <S.ValorEstatistica>000</S.ValorEstatistica>
              </S.CaixaEstatistica>
              <S.CaixaEstatistica>
                <S.RotuloEstatistica>Seguidores</S.RotuloEstatistica>
                <S.ValorEstatistica>000</S.ValorEstatistica>
              </S.CaixaEstatistica>
              <S.CaixaEstatistica>
                <S.RotuloEstatistica>Curtidas</S.RotuloEstatistica>
                <S.ValorEstatistica>000</S.ValorEstatistica>
              </S.CaixaEstatistica>
            </S.ContainerEstatisticas>
          </S.DetalhesUsuario>
        </S.CartaoPerfil>
      </S.SecaoBanner>

      <S.BarraNavegacao>
        <S.ContainerAbas>
          <S.BotaoAba 
            $ativo={abaAtiva === 'criados'} 
            onClick={() => setAbaAtiva('criados')}
          >
            Criados
          </S.BotaoAba>
          <S.BotaoAba 
            $ativo={abaAtiva === 'pastas'} 
            onClick={() => setAbaAtiva('pastas')}
          >
            Salvos
          </S.BotaoAba>
        </S.ContainerAbas>

        <S.ContainerAcoes>
          <S.BotaoIcone aria-label="Expandir">
            <Maximize2 size={16} />
          </S.BotaoIcone>
          <S.BotaoIcone aria-label="Reduzir">
            <Minimize2 size={16} />
          </S.BotaoIcone>
        </S.ContainerAcoes>
      </S.BarraNavegacao>

      <S.AreaConteudo>
        {abaAtiva === 'criados' ? (
          <S.CaixaVazia>
            <S.ConteudoVazio>
              <S.TextoVazio>
                Sua arte pode ser o próximo Wallpapers favorito de alguém
              </S.TextoVazio>
              <S.BotaoCriar>Criar</S.BotaoCriar>
            </S.ConteudoVazio>
          </S.CaixaVazia>
        ) : (
          <S.ContainerPastas>
            {dadosPastas.length > 0 ? (
              dadosPastas.map((pasta, index) => (
                <S.CartaoPasta key={pasta.id || index}>
                  <S.VisualizacaoPasta>
                    {pasta.imagemCapa ? (
                      <img src={pasta.imagemCapa} alt={pasta.titulo} />
                    ) : (
                      <Folder size={40} color="#9ca3af" />
                    )}
                  </S.VisualizacaoPasta>
                  <S.InfoPasta>
                    <S.TituloPasta>{pasta.titulo || 'Sem título'}</S.TituloPasta>
                    <S.ContadorPasta>{pasta.quantidadeItens || 0} itens</S.ContadorPasta>
                  </S.InfoPasta>
                </S.CartaoPasta>
              ))
            ) : (
              <S.CaixaVazia style={{ gridColumn: '1 / -1' }}>
                <p style={{ color: '#9ca3af' }}>Nenhuma pasta encontrada.</p>
              </S.CaixaVazia>
            )}
          </S.ContainerPastas>
        )}
      </S.AreaConteudo>
    </S.Container>
  );
}