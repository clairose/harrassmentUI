$(document).ready(function () {
    $(".draggable-woman").draggable({
        helper: "clone"
    });
    
    $(".draggable-man").draggable({
    helper: "clone"
    });
    
    function handleQuidClass(){
        $(".quid").droppable({
        drop: function( event, ui ) {
                if ($(ui.draggable).hasClass("draggable-woman")){
                    $(this).replaceWith("<img class='quid' src='images/quid-withwoman.png'>");
                } else {
                    $(this).replaceWith("<img class='quid' src='images/quid-withman.png'>");
                }
                $(".changeable-text").replaceWith("<div class='changeable-text added-text'><h4>QUID PRO QUO</h4><p>means 'something for something' or 'this for that.' Example: An employee must submit to a supervisor’s sexually harassing conduct in order to get promoted by the supervisor.</p></div>");
                handleQuidClass();
            }
        });
    }
    
    handleQuidClass();

    function handleHostileClass(){
        $(".hostile").droppable({
        drop: function( event, ui ) {
                if ($(ui.draggable).hasClass("draggable-woman")){
                    $(this).replaceWith("<img class='hostile' src='images/hostile-withwoman.png'>");
                } else {
                    $(this).replaceWith("<img class='hostile' src='images/hostile-withman.png'>");
                }
                $(".changeable-text").replaceWith("<div class='changeable-text added-text'><h4>HOSTILE WORK ENVIRONMENT</h4><p>is demonstrated by severe or pervasive conduct that creates a work environment a reasonable person would consider intimidating, hostile, or abusive.</p></div>");
                handleHostileClass();
            }
        });
    }
    
    handleHostileClass();
}
)