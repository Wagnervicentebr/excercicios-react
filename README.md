<!-- Regras de components -->

- Dashborad de pedidos na internet
header
Saudação Ola, Admin
Listagem de pedidos
    - Bater na api e pegar dados 
item lista deve reditrecionar para tela de resumo

Page - dashboard
    - UI
        Component Header
        <h1>Saudação</h1>
        Compoenet ListaPeidos (mais genrica possivel)
        - Component de ItemLista
    - Logica
        Page
            Chamar api pegar os dados
            Passar dados para component ListaPeidos
            Receber callback de click no item
            Redirect para /pedidos/:id
        Compoenet ListaPeidos
            Receber por props pedidos
            Renderizar pedidos passando cada item para component item
            chamar Callback da page quando clicar no item
        Component ItemLista
            Receber item por props
            No click chamar o callback do ListaPeidos
    - Responsabilidade
        Page
            Responsavel por chamar o endpoint de pedidos e passar os items dos pedidos para ListaPedidos
            Mostrar os component de header, saudação e component de listaPedidos
            Handle do click do item, direcionando para tela de resumo pedido
        Compoenet ListaPeidos
            Responsavel por receber a lista e montar a estrutura da tabela
            Passar item por item para ser renderizado pelo itemLista
            Passar um calback de onclik para itemLista
            Chamar callback do Page quando itemList tiver sido clidado
        Component ItemLista
            Iterar os item da lista e montar as linhas da tabela
            Chamar o callback quando tiver sido clicado

            

    
