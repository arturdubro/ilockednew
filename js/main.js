$(document).ready(function(){
    $(document).on('click', '.quests-preview-container', function(){
        if($(this).attr('id')) alert($(this).attr('id'));
    });
});