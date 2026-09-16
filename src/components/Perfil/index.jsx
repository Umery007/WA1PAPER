import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Pencil, Maximize2, Minimize2 } from 'lucide-react';
import imagemPadraoBanner from '../../assets/perfil/pages.png';
import imagemPasta from '../../assets/img-cards/paper.jpeg';
import Pasta, { GridPastas, LinhaPastas } from '../Pasta';
import Salvos from '../Salvos-ampliar';
import SalvosEncolher from '../Salvos-encolher';
import * as S from './styles';

const pastasPadrao = [
  { id: 1, titulo: 'Pasta NANA', quantidadeItens: 120, imagemCapa: imagemPasta },
  { id: 2, titulo: 'Pasta NANA', quantidadeItens: 120, imagemCapa: imagemPasta },
  { id: 3, titulo: 'Pasta NANA', quantidadeItens: 120, imagemCapa: imagemPasta },
  { id: 4, titulo: 'Pasta NANA', quantidadeItens: 120, imagemCapa: imagemPasta },
  { id: 5, titulo: 'Pasta NANA', quantidadeItens: 120, imagemCapa: imagemPasta },
  { id: 6, titulo: 'Pasta NANA', quantidadeItens: 120, imagemCapa: imagemPasta },
];

export default function Perfil({
  imagemBanner = imagemPadraoBanner,
  imagemAvatar,
  dadosPastas = pastasPadrao,
  mostrarSalvos = false,
  salvosAmpliadoInicial = false
}) {
  const [abaAtiva, setAbaAtiva] = useState('pastas');
  const [salvosAmpliado, setSalvosAmpliado] = useState(salvosAmpliadoInicial);
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
        {mostrarSalvos ? (
          <S.TituloPasta>Pastas-NANA</S.TituloPasta>
        ) : (
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
              Pastas
            </S.BotaoAba>
          </S.ContainerAbas>
        )}

        <S.ContainerAcoes>
          <S.BotaoIcone
            type="button"
            aria-label="Expandir"
            aria-pressed={salvosAmpliado}
            $ativo={salvosAmpliado}
            onClick={() => setSalvosAmpliado(true)}
          >
            <Maximize2 size={16} />
          </S.BotaoIcone>
          <S.BotaoIcone
            type="button"
            aria-label="Reduzir"
            aria-pressed={!salvosAmpliado}
            $ativo={!salvosAmpliado}
            onClick={() => setSalvosAmpliado(false)}
          >
            <Minimize2 size={16} />
          </S.BotaoIcone>
        </S.ContainerAcoes>
      </S.BarraNavegacao>

      <S.AreaConteudo>
        {mostrarSalvos && abaAtiva === 'pastas' ? (
          salvosAmpliado ? <Salvos /> : <SalvosEncolher />
        ) : abaAtiva === 'criados' ? (
          <S.CaixaVazia>
            <S.ConteudoVazio>
              <S.TextoVazio>
                Sua arte pode ser o próximo Wallpapers favorito de alguém
              </S.TextoVazio>
              <S.BotaoCriar>Criar</S.BotaoCriar>
            </S.ConteudoVazio>
          </S.CaixaVazia>
        ) : (
          <GridPastas>
            {dadosPastas.length > 0 ? (
              [dadosPastas.slice(0, 3), dadosPastas.slice(3, 6)].map((linha, linhaIndex) => (
                <LinhaPastas key={linhaIndex} $invertida={linhaIndex === 1}>
                  {linha.map((pasta, index) => (
                    <Pasta
                      key={pasta.id || index}
                      {...pasta}
                      onClick={() => navigate('/salvos')}
                    />
                  ))}
                </LinhaPastas>
              ))
            ) : (
              <S.CaixaVazia>
                <p style={{ color: '#9ca3af' }}>Nenhuma pasta encontrada.</p>
              </S.CaixaVazia>
            )}
          </GridPastas>
        )}
      </S.AreaConteudo>
    </S.Container>
  );
}