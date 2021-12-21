import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// const configArrow = {
//   background: 'rgb(233, 30, 99)'
// }

// {company, area, tasks, year, period}
function CardTimeline () {
  return (
    <VerticalTimeline lineColor={'rgba(0, 0, 0, 0)'}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - 10 meses"
        iconStyle={{ background: '#084222' }}
        contentArrowStyle={{ borderRight: '10px solid' }}
      >
        <h3 className="vertical-timeline-element-title">Gerente de Contas</h3>
        <h4 className="vertical-timeline-element-subtitle">Agência Go' W</h4>
        <ul>
          <li>Prospecção de Contas</li>
          <li>Negociação</li>
          <li>Fechamento de Contrato</li>
          <li>Briefing</li>
          <li>Planejamento de Campanha</li>
          <li>Entrega de Projeto</li>
          <li>Acompanhamento e Inplantação de projeto</li>
        </ul>
        {/* <p>
          Prospecção, Negociação, Fechamento de Contrato, Briefing, Planejamento de Campanha, Entrega de Projeto, Acompanhamento e Implantação de Projeto
        </p> */}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016 - 1 ano 4 meses"
        iconStyle={{ background: '#084222', color: '#fff' }}
        contentArrowStyle={{ borderRight: '10px solid' }}
      >
        <h3 className="vertical-timeline-element-title">Sales Specialist</h3>
        <h4 className="vertical-timeline-element-subtitle">Practo</h4>
        <ul>
          <li>Prospecção de Clínicas</li>
          <li>Agendamento de Reuniões</li>
          <li>Reuniões de apresentação</li>
          <li>Follow up</li>
          <li>Negociação</li>
          <li>Fechamento de contrato</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015 - 7 meses"
        iconStyle={{ background: '#084222', color: '#fff' }}
        contentArrowStyle={{ borderRight: '10px solid' }}
      >
        <h3 className="vertical-timeline-element-title">Analista de Conteúdo</h3>
        <h4 className="vertical-timeline-element-subtitle">Practo</h4>
        <ul>
          <li>Prospecção de Clínicas</li>
          <li>Agendamento de Reuniões</li>
          <li>Reuniões de apresentação</li>
          <li>Follow up</li>
          <li>Cadastramento</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2012 - 1 ano 3 meses"
        iconStyle={{ background: '#084222', color: '#fff' }}
        contentArrowStyle={{ borderRight: '10px solid' }}
      >
        <h3 className="vertical-timeline-element-title">Auxiliar Administrativo</h3>
        <h4 className="vertical-timeline-element-subtitle">Folha de São Paulo</h4>
        <ul>
          <li>Suporte a Todas as Ilhas de Atendimento</li>
          <li>Assistência aos Supervisores</li>
          <li>Reuniões de apresentação</li>
          <li>Gerenciamento de Arquivos</li>
          <li>Elaboração de Material para Treinamento de Novos Operadores</li>
          <li>Treinamento de Novos Operadores</li>
          <li>Elaboração de Melhoria Sistêmica Junto a Área de TI</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 3 anos 10 meses"
        iconStyle={{ background: '#084222', color: '#fff' }}
        contentArrowStyle={{ borderRight: '10px solid' }}
      >
        <h3 className="vertical-timeline-element-title">Teleoperador</h3>
        <h4 className="vertical-timeline-element-subtitle">Folha de São Paulo</h4>
        <ul>
          <li>SAC Assinantes (Ocorrências, Solicitações e Informativos)</li>
          <li>SAC Jornaleiros (Ocorrências, Solicitações e Informativos)</li>
          <li>Receptivo de Venda e Pós-Venda</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2007 - 6 meses"
        iconStyle={{ background: '#084222', color: '#fff' }}
        contentArrowStyle={{ borderRight: '10px solid' }}
      >
        <h3 className="vertical-timeline-element-title">Operador de Distribuição</h3>
        <h4 className="vertical-timeline-element-subtitle">DHL Supply Chain</h4>
        <ul>
          <li>Sun Microsystem e Cannon</li>
          <li>Controle de Entrada e Saída de Peças para Importação e Exportação</li>
          <li>Conferência de NF de Importação</li>
          <li>Controle de Inventário</li>
          <li>Agendamento de Coleta com Transportadoras e Clientes</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 4 meses"
        iconStyle={{ background: '#084222', color: '#fff' }}
        contentArrowStyle={{ borderRight: '10px solid' }}
      >
        <h3 className="vertical-timeline-element-title">Encarregado de Loja</h3>
        <h4 className="vertical-timeline-element-subtitle">Droga Raia</h4>
        <ul>
          <li>Atendimento ao Cliente</li>
          <li>Operador de Caixa</li>
          <li>Controle e Reposição de Produtos</li>
        </ul>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default CardTimeline;