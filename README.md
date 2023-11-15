# agendamento-api

## Problema:

Uma API que busca os dados do usuário ficou indisponível durante o dia de hoje, toda a request retornava 504 Gateway Timeout. Eu precisava saber quando essa API estaria funcionando novamente e pra não ficar tendo que testar a cada hora, para resolver o problema eu pensei em fazer um programa que agenda as requisições.

## Solução:

O programa é em nodejs, o agendamento pode ser feito usando setInterval mas recomendo usar node-cron.
A API que vamos chamar pode ser qualquer API pública, pra fazer a request vc pode usar o pacotes got/superagent/axios ou o node fetch nativo.

Os commits devem seguir a nomenclatura padrão: https://www.conventionalcommits.org/en/v1.0.0/