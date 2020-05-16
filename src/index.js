const { registerBlockType} = wp.blocks;

const myStyle = {
    backgroundColor: '#900',
    color: '#fff',
    padding: '20px',
};

( function( blocks, element ) {
    var el = element.createElement;

    var editorStyle = {
        backgroundColor: '#900',
        color: '#fff',
        padding: '20px',
    };

    var frontEndStyle = {
        backgroundColor: '#fdff88',
        color: '#6e8b3d',
        fontWeight: 'bold',
        padding: '20px',
    };

    blocks.registerBlockType( 'mattparmantestblock/simple-test-block', {
        title: 'Matts Test Block',
        icon: 'palmtree',
        category: 'common',
        example: {},
        edit: function() {
            return el(
                'p',
                { style: editorStyle },
                'Whats up Automattic! You are in my admin.'
            );
        },
        save: function() {
            return el(
                'p',
                { style: frontEndStyle },
                '"Everything should be made as simple as possible, but not simpler."'
            );
        },
    } );
}(
    window.wp.blocks,
    window.wp.element
) );
