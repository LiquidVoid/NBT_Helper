<!doctype html>
<?php $antiCache = "?" . md5( time() ); ?>
<html>
    <head>
        <title>Minecraft NBT tag generator</title>
        <link href="styles.css<?php echo $antiCache; ?>" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="NBT.js<?php echo $antiCache; ?>"></script>

        <script type="text/javascript" src="template/Drop.js<?php echo $antiCache; ?>"></script>
        <script type="text/javascript" src="template/Entity.js<?php echo $antiCache; ?>"></script>
        <script type="text/javascript" src="template/Minecart.js<?php echo $antiCache; ?>"></script>
        <script type="text/javascript" src="template/Mob.js<?php echo $antiCache; ?>"></script>
        <script type="text/javascript" src="template/Projectile.js<?php echo $antiCache; ?>"></script>
        <script type="text/javascript" src="template/TileEntity.js<?php echo $antiCache; ?>"></script>
        <script type="text/javascript" src="template/Other.js<?php echo $antiCache; ?>"></script>
        <script type="text/javascript" src="definitions/entities.js<?php echo $antiCache; ?>"></script>
        <script type="text/javascript" src="interface/builders.js<?php echo $antiCache; ?>"></script>
        <script type="text/javascript" src="output/entity.js<?php echo $antiCache; ?>"></script>

        <script type="text/javascript">
            var TAGS = { };

            function test() {
                if ( TAGS.elem ) {
                    TAGS.elem.innerHTML = "";
                }
                TAGS = { };
                TAGS = newEntity( Entities[document.getElementById( "entityList" ).value].template );
            }

            //Writes lines to the log
            function logWrite( text ) {
                var logElem = document.getElementById( "output" );
                logElem.innerHTML = logElem.innerHTML + "\n" + text;
            }
            function out() {
                document.getElementById( "output" ).innerHTML = "{" + compile( TAGS ) + "}";
            }

            //Sets the value of a given tag to the value from a given input
            function set( input, tag ) {
                newVal = getInput( input );

                if ( tag.isValid( newVal ) ) {
                    tag.setVal( newVal );
                }
                else {
                    input.value = tag.value;
                }

                out();
            }

            //Retrieves input from form elements, and converts it to the proper data type
            function getInput( input ) {
                if ( input.type === "number" ) {
                    if ( input.value % 1 === 0 ) {
                        return parseInt( input.value );
                    }
                    else {
                        return parseFloat( input.value );
                    }
                }
                else {
                    return input.value;
                }
            }

            function setMidHeight() {
                document.getElementById( "midBox" ).style.height = ( window.innerHeight ) - 150 + "px";
            }

            function addEntityList() {
                var sel = document.getElementById( "entityList" );
                for ( var i in Entities ) {
                    var ch = document.createElement( "option" );
                    ch.value = Entities[i].id;
                    ch.innerHTML = Entities[i].name;
                    sel.appendChild( ch );
                }
            }

        </script>


    </head>

    <body>
        <div id="upperBox">
            <span>NBT Entity: </span>
            <select id="entityList"></select>
            <input type="button" value="+" onClick="test();">
            <input type="button" value="Compile" onClick="out();">
        </div>
        <div id="midBox">
            <ul id="inputs">
            </ul>
        </div>
        <div id="lowerBox">
            <textarea id="output" readonly></textarea>
            <div id="help">
                <h4>Help:</h4>
                <p>This incomplete version can create NBT for most mobs, though compound/list tags do not actually work right. Simply select a Mob from the list, and hit the plus sign. When a field is modified the data tag will be output to the left.</p>
                <p>Note that this is in development, so it may change rappidly, or become unusable, at any time.</p>
            </div>
        </div>
    </body>
    <script type="text/javascript">
        setMidHeight();
        window.onresize = function() {
            setMidHeight();
        };
        addEntityList();
    </script>
</html>