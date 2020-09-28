var undoingText = "";
var READING_WPM = 200;
var SPEAKING_WPM = 125;
var more_stats_status = false;
var DEFAULT_TOP_FREQUENCY = 10;
var exclude_grammar_word_option = true;
var numberofTopWordFreq = DEFAULT_TOP_FREQUENCY;
var INPUTED_TEXT_KEY = "INPUTED_TEXT_KEY";

function getwccInfoForNonEnglishText(nonEnglishText) {
    var wccInfo = [];
    var trimedText = $.trim(nonEnglishText);
    wccInfo['num_character'] = trimedText.length;
    var wordList = trimedText.split(/[\s\n]+/);
    wccInfo['num_word'] = trimedText.length > 0 ? wordList.length : 0;
    return wccInfo;
}

function updateStats() {
    getwccInfo();
    resizeHeightOfDefinitionBox();
}

function updateStatsWithExtraStatistics() {
    getwccInfo(true);
}

function getwccInfo(withExtraStatistics) {
    var text = $("#textbox").val();
    var isNotEnglish = $("#isNotEnglish").prop('checked');
    var wccInfo;
    var selected_text = "";
    var wccInfo_selected;
    if (isNotEnglish) {
        wccInfo = getwccInfoForNonEnglishText(text);
    } else {
        wccInfo = $.wordCountTool.getwccInfo(text, withExtraStatistics);
        densityStats(wccInfo);
		
    }
	
    displaywccInfo(wccInfo, withExtraStatistics);
    displaywccInfoInTitle(wccInfo);
    saveTextToStorage(text);
}

function displaywccInfo(wccInfo, withExtraStatistics) {
    var isNotEnglish = $("#isNotEnglish").prop('checked');
    if (!isNotEnglish) {
        $("#num_word").text(wccInfo['num_word']);
        $("#num_character").text(wccInfo['num_character']);
        $("#num_character_wo_spaces").text(wccInfo['num_character_wo_spaces']);
        $("#num_syllable").text(wccInfo['num_syllable']);
        $("#num_mono_syllable").text(wccInfo['num_mono_syllable']);
        $("#num_poly_syllable").text(wccInfo['num_poly_syllable']);
        $("#num_sentence").text(wccInfo['num_sentence']);
        $("#num_paragraph").text(wccInfo['num_paragraph']);
        $("#avg_sentence_length").text(wccInfo['avg_sentence_length']);
        $("#avg_word_length").text(wccInfo['avg_word_length']);
        $("#dale_chall_readability").text(wccInfo['dale_chall_index']);
        $("#syllable_per_word").text(wccInfo['syllable_per_word']);
        if (wccInfo['num_character'] > 0)
            $("#readability_level").text(getReadabilityLevel(wccInfo['dale_chall_index']));
        else
            $("#readability_level").text("N/A");
        $("#estimate_reading_time").text(Math.ceil(wccInfo['num_word'] / READING_WPM) + ' min.');
        $("#estimate_speaking_time").text(Math.ceil(wccInfo['num_word'] / SPEAKING_WPM) + ' min.');
        var MAX_NUMBER_TO_DISPLAY_PERCENTAGE_SIGN = 10000;
        var numDifficultWords = wccInfo['num_difficult_words'] < MAX_NUMBER_TO_DISPLAY_PERCENTAGE_SIGN ? "" + wccInfo['num_difficult_words'] + " <span class='stat_percentage'>(" + wccInfo['percentage_difficult_words'] + "%)</span>" : "" + wccInfo['num_difficult_words'];
        $("#num_difficult_word").html(numDifficultWords);
        var numShortWords = wccInfo['num_short_word'] < MAX_NUMBER_TO_DISPLAY_PERCENTAGE_SIGN ? "" + wccInfo['num_short_word'] + " <span class='stat_percentage'>(" + wccInfo['percentage_num_short_word'] + "%)</span>" : "" + wccInfo['num_short_word'];
        $("#num_short_word").html(numShortWords);
        var numLongWords = wccInfo['num_long_word'] < MAX_NUMBER_TO_DISPLAY_PERCENTAGE_SIGN ? "" + wccInfo['num_long_word'] + " <span class='stat_percentage'>(" + wccInfo['percentage_num_long_word'] + "%)</span>" : "" + wccInfo['num_long_word'];
        $("#num_long_word").html(numLongWords);
        $("#longest_sentence_by_characters").text(wccInfo['longest_sentence_by_characters']);
        $("#longest_word_by_characters").text(wccInfo['longest_word_by_characters']);
        $("#longest_word_by_syllables").text(wccInfo['longest_word_by_syllables']);
        if (wccInfo['num_word'] < MAX_WORDS_TO_DISPLAY_UNIQUENESS || withExtraStatistics == true) {
            $("#num_unique_word").show();
            $("#showExtraStatistics").hide();
            var numUniqueWords = wccInfo['num_unique_word'] < MAX_NUMBER_TO_DISPLAY_PERCENTAGE_SIGN ? "" + wccInfo['num_unique_word'] + " <span class='stat_percentage'>(" + wccInfo['percentage_num_unique_word'] + "%)</span>" : "" + wccInfo['num_unique_word'];
            $("#num_unique_word").html(numUniqueWords);
        } else {
            $("#num_unique_word").hide();
            $("#showExtraStatistics").show();
        }
        $("#automated_readability_index").text(wccInfo['automated_readability_index']);
        $("#coleman_liau_index").text(wccInfo['coleman_liau_index']);
        $("#flesch_reading_ease_score").text(wccInfo['flesch_reading_ease_score']);
        $("#flesch_kincaid_grade_level").text(wccInfo['flesch_kincaid_grade_level']);
        $("#gunning_fog_index").text(wccInfo['gunning_fog_index']);
    } else {
        $("#num_word").html(wccInfo['num_word']);
        $("#num_difficult_word").html("&nbsp;");
        $("#num_short_word").html("&nbsp;");
        $("#num_long_word").html("&nbsp;");
        $("#num_unique_word").html("&nbsp;");
        $("#num_character").html(wccInfo['num_character']);
        $("#num_character_wo_spaces").html("&nbsp;");
        $("#num_syllable").html("&nbsp;");
        $("#num_mono_syllable").html("&nbsp;");
        $("#num_poly_syllable").html("&nbsp;");
        $("#num_sentence").html("&nbsp;");
        $("#num_paragraph").html("&nbsp;");
        $("#avg_sentence_length").html("&nbsp;");
        $("#avg_word_length").html("&nbsp;");
        $("#dale_chall_readability").html("&nbsp;");
        $("#readability_level").html("&nbsp;");
        $("#automated_readability_index").html("&nbsp;");
        $("#coleman_liau_index").html("&nbsp;");
        $("#flesch_reading_ease_score").html("&nbsp;");
        $("#flesch_kincaid_grade_level").html("&nbsp;");
        $("#gunning_fog_index").html("&nbsp;");
    }
}

function getReadabilityLevel(score) {
    var readability = "";
    if (score > 10)
        readability += "graduate";
    else if (score > 9)
        readability += "13-15th";
    else if (score > 8)
        readability += "11-12th";
    else if (score > 7)
        readability += "9-10th";
    else if (score > 6)
        readability += "7-8th";
    else if (score > 5)
        readability += "5-6th";
    else
        readability += "< 4th";
    return readability;
}

function displaywccInfoInTitle(wccInfo) {
    var WORDS = " Total Words (";
    if (wccInfo['num_word'] <= 1)
        WORDS = " Total Words (";
    var CHARACTERS = " Total characters (";
    if (wccInfo['num_character'] <= 1)
        CHARACTERS = " Total characters (";
    var str = WORDS + wccInfo['num_word']  + ") & " + CHARACTERS + wccInfo['num_character']+")";

    $("#counter").html(str);
}

function sumWeight(weights) {
    var sum = 0;
    $.each(weights, function() {
        sum += this;
    });
    return sum;
}

function displayWordCloud() {
    $('#myCanvasContainer').show();
    if (!$('#myCanvas').tagcanvas({
            weight: true,
            weightMode: "both",
            weightFrom: "data-weight",
            weightSizeMin: 5,
            weightSizeMax: 150
        }, 'tagList')) {
        $('#myCanvasContainer').hide();
    }
}

function densityStats(wccInfo) {
    var totalNumWord = wccInfo['num_word'];
    if (totalNumWord == 0) {
        $("#keyword_density-tab-1-table").html("");
        $("#keyword_density-tab-2-table").html("");
        $("#keyword_density-tab-3-table").html("");
        return;
    }
    var oneWordFrequency = wccInfo["oneWordFrequency"];
    numberofTopWordFreq = $("#number_of_top_keywords_value").val();
    if (numberofTopWordFreq <= 0) {
        $("#keyword_density-tab-1-table").html('');
        $("#keyword_density-tab-2-table").html('');
        $("#keyword_density-tab-3-table").html('');
        return;
    }
    if (numberofTopWordFreq > oneWordFrequency.length)
        numberofTopWordFreq = oneWordFrequency.length;
    oneWordFrequencyHTML = "";
    numberOfWordDisplayed = 0;
    oneWordOrder = 0;
    for (i = 0; i < oneWordFrequency.length; i++) {
        if (exclude_grammar_word_option && (grammarWords.indexOf(oneWordFrequency[i][0]) > -1 || oneWordFrequency[i][0].length == 1))
            continue;
        oneWordOrder++;
        oneWordFrequencyValue = oneWordFrequency[i][1] + " (" + Math.round(100 * oneWordFrequency[i][1] / totalNumWord * 10) / 10 + "%)";
        oneWordFrequencyHTML += '<div class="col-md-12 w_tbody text-left"><div class="col-md-6 col-xs-6 br-right p15">' + oneWordOrder + '. ' + oneWordFrequency[i][0] + '</div><div class="col-md-6 col-xs-6 p15">'+oneWordFrequencyValue+'</div></div>';
        numberOfWordDisplayed++;
        if (numberOfWordDisplayed >= numberofTopWordFreq)
            break;
    }
    oneWordFrequencyHTML += '<div class="clear"></div>';
    $("#keyword_density-tab-1-table").html(oneWordFrequencyHTML);

    var twoWordFrequency = wccInfo["twoWordFrequency"];
    if (numberofTopWordFreq > twoWordFrequency.length)
        numberofTopWordFreq = twoWordFrequency.length;
    twoWordFrequencyHTML = "";
    numberOfWordDisplayed = 0;
    twoWordOrder = 0;
    for (i = 0; i < twoWordFrequency.length; i++) {
        if (exclude_grammar_word_option && (grammarWords.indexOf(twoWordFrequency[i][0]) > -1 || twoWordFrequency[i][0].length == 1))
            continue;
        twoWordOrder++;
        twoWordFrequencyValue = twoWordFrequency[i][1] + " (" + Math.round(100 * twoWordFrequency[i][1] / (totalNumWord - 1) * 10) / 10 + "%)";

        twoWordFrequencyHTML += '<div class="col-md-12 w_tbody text-left"><div class="col-md-6 col-xs-8 br-right p15">' + twoWordOrder + '. ' + twoWordFrequency[i][0] + '</div><div class="col-md-6 col-xs-4 p15">'+twoWordFrequencyValue+'</div></div>';

        numberOfWordDisplayed++;
        if (numberOfWordDisplayed >= numberofTopWordFreq)
            break;
    }
    twoWordFrequencyHTML += '<div class="clear"></div>';
    $("#keyword_density-tab-2-table").html(twoWordFrequencyHTML);

    var threeWordFrequency = wccInfo["threeWordFrequency"];
    if (numberofTopWordFreq > threeWordFrequency.length)
        numberofTopWordFreq = threeWordFrequency.length;
    threeWordFrequencyHTML = "";
    numberOfWordDisplayed = 0;
    threeWordOrder = 0;
    for (i = 0; i < threeWordFrequency.length; i++) {
        if (exclude_grammar_word_option && (grammarWords.indexOf(threeWordFrequency[i][0]) > -1 || threeWordFrequency[i][0].length == 1))
            continue;
        threeWordOrder++;
        threeWordFrequencyValue = threeWordFrequency[i][1] + " (" + Math.round(100 * threeWordFrequency[i][1] / (totalNumWord - 1) * 10) / 10 + "%)";

        threeWordFrequencyHTML += '<div class="col-md-12 w_tbody text-left"><div class="col-md-6 col-xs-8 br-right p15">' + threeWordOrder + '. ' + threeWordFrequency[i][0] + '</div><div class="col-md-6 col-xs-4 p15">'+threeWordFrequencyValue+'</div></div>';

        numberOfWordDisplayed++;
        if (numberOfWordDisplayed >= numberofTopWordFreq)
            break;
    }
    threeWordFrequencyHTML += '<div class="clear"></div>';
    $("#keyword_density-tab-3-table").html(threeWordFrequencyHTML);
    resizeHeightOfDefinitionBox();
    $(window).resize(resizeHeightOfDefinitionBox);
}


String.prototype.toTitleCase = function() {
    var i, str, lowers, uppers;
    str = this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At', 'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
    for (i = 0; i < lowers.length; i++)
        str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'), function(txt) {
            return txt.toLowerCase();
        });
    uppers = ['Id', 'Tv'];
    for (i = 0; i < uppers.length; i++)
        str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'), uppers[i].toUpperCase());
    return str;
}
String.prototype.toAlternatingCase = function() {
    var str = "",

        i;
    var isLower = false;
    for (i = 0; i < this.length; i++) {
        if (/\s/.test(this[i])) {
            str += this[i];
            continue;
        }
        if (isLower)
            str += this[i].toLowerCase();
        else
            str += this[i].toUpperCase();
        if (this[i] != this[i].toUpperCase() || this[i] != this[i].toLowerCase())
            isLower = !isLower;
    }
    return str;
}

function convertCaseForText() {
    var text = $("#textbox").val();
    var buttonID = $(this).attr("id");
    switch (buttonID) {
        case "toUpperCaseButton":
            undoingText = text;
            text = text.toUpperCase();
            break;
        case "toLowerCaseButton":
            undoingText = text;
            text = text.toLowerCase();
            break;
        case "toSentenceCaseButton":
            undoingText = text;
            text = text + '.'
            text = text.replace(/\w[^.?!:\n]*[.?!:\n$]+/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
            text = text.substr(0, text.length - 1);
            break;
        case "toTitleCaseButton":
            undoingText = text;
            text = text.toTitleCase();
            break;
        case "toAlternatingCaseButton":
            undoingText = text;
            text = text.toAlternatingCase();
            break;
        case "toToggleCaseButton":
            undoingText = text;
            text = text.replace(/[\w]*/g, function(txt) {
                return txt.charAt(0).toLowerCase() + txt.substr(1).toUpperCase();
            });
            break;
        case "htmlStripButton":
            undoingText = text;
            html = "<html>" + text + "</html>";
            text = $(html).text();
            break;
        case "clearTextButton":
            undoingText = text;
            text = "";
            break;
        case "undoButton":
            if (undoingText.length != 0) {
                var temp = text;
                text = undoingText;
                undoingText = temp;
            }
            break;
    }
    $("#textbox").val(text);
    updateStats();
}

function clear_text() {
    $("#textbox").val("");
    $("#queue").hide();
    updateStatsWithExtraStatistics();
}

function isNotEnglishUpdate() {
    getwccInfo();
    $("#counter").focus();
}
$(document).ready(function() {
    var textbox = $("#textbox");
    textbox.on('input propertychange updateInfo keyup mousedown mouseup', getwccInfo);
    textbox.on('paste', function() {
        setTimeout(function() {
            getwccInfo();
        }, 10);
    });
    $("#number_of_top_keywords_value").on('keyup keypress blur change', getwccInfo);
    $("#number_of_top_keywords_value").on('keyup blur change', getwccInfo);
    resizeHeightOfDefinitionBox();
    $(window).resize(resizeHeightOfDefinitionBox);

    $('#file_upload').change(function()
    {
        $("#LodeGif").show();
        var form_data = new FormData();
        var fileSelect = document.getElementById('file_upload');
        var files = fileSelect.files;
        if (files.length == 1 && files[0].type.match(/^(text\/plain)|(application\/(pdf|[a-z\-\.]*(word)+[a-z\-\.]*))$/)) {
            form_data.append('file_upload', files[0], files[0].name);
            var xhr = new XMLHttpRequest();
            // Open the connection.
            xhr.open('POST', ajax_url_externalfile, true);
            // Set request header
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            // Set up a handler for when the request finishes.
            xhr.onload = function () {
                if (xhr.status === 200) {
                    $("#LodeGif").hide();
                    // File(s) uploaded.
                    var external_file_response = JSON.parse(xhr.responseText);
                    if (typeof(external_file_response) == "undefined" || !external_file_response) {
                        return false;
                    }
                    if (
                        typeof(external_file_response['status']) != "undefined" && external_file_response['status'] == 'success'
                        && typeof(external_file_response['message']) != "undefined" && external_file_response['message']
                    ) {
                        search_text = external_file_response['message'];

                        $("#textbox").val(search_text);
                        cont();

                        //$("#search_text").val(search_text);
                    }
                } else {
                    $("#LodeGif").hide();
                    alert('Unable to load file!');
                }
            };
            // Send the Data.
            xhr.send(form_data);
        } else {
            $("#LodeGif").hide();
            console.log("Error!");
        }
        return false;
    });

    //$("#keyword_density_tabs").tabs();
    $('input[name="exclude-grammar-word-switcher"]').click( function(event, state) {
		
		
        var check_box = $('input[type="checkbox"]');
        var text = $("#textbox").val();
        if(check_box.prop("checked")== true)
        {
            exclude_grammar_word_option = true;
            wccInfo = $.wordCountTool.getwccInfo(text);
            densityStats(wccInfo);
        }else{
            exclude_grammar_word_option = false;
            //var text = $("#textbox").val();
            wccInfo = $.wordCountTool.getwccInfo(text);
            densityStats(wccInfo);
        }
		
    });
    /*if (typeof(Storage) !== "undefined") {
        oldText = localStorage.getItem(INPUTED_TEXT_KEY);
        $("#textbox").val(oldText);
        getwccInfo();
    }*/
    $("#close_file").click(clear_text);
    updateColorUI();
});

function updateColorUI() {
    if ($("#textbox").val().length > 0) {
        $("#close_file").css('color', '#E83B1C');
    } else {
        $("#close_file").css('color', '#908280');
    }
}

function saveTextToStorage(text) {
    updateColorUI();
    localStorage.setItem(INPUTED_TEXT_KEY, text);
}

function showQueue() {
    $("#queue").show();
}

function updateInputText(file, data) {
    $('#textbox').val(data);
    updateStatsWithExtraStatistics();
    $("#counter").focus();
}

function resizeHeightOfDefinitionBox() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return;
    }
    var definitionBox = $("#definitionBox").height();
    var infoBox = $("#infoBox").height();
    if (infoBox > definitionBox)
        $("#definitionBox").height($("#infoBox").height());
    else
        $("#infoBox").height($("#definitionBox").height());
    var statistics_height = $("#statistics").height();
    var textToAnalyzeContainer_height = $("#textToAnalyzeContainer").height();
    if (textToAnalyzeContainer_height > statistics_height)
        $("#statistics").height(textToAnalyzeContainer_height);
    else {
        $("#textToAnalyzeContainer").height(statistics_height);
    }
    //$("#textbox").height($("#textToAnalyzeContainer").height() - 300);
}

grammarWords = ['about', 'after', 'ago', 'all', 'also', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'been', 'before', 'both', 'but', 'by', 'can', 'did', 'do', 'does', 'done', 'edit', 'even', 'every', 'for', 'from', 'had', 'has', 'have', 'he', 'here', 'him', 'his', 'however', 'if', 'in', 'into', 'is', 'it', 'its', 'less', 'many', 'may', 'more', 'most', 'much', 'my', 'no', 'not', 'often', 'quote', 'of', 'on', 'one', 'only', 'or', 'other', 'our', 'out', 're', 'says', 'she', 'so', 'some', 'soon', 'such', 'than', 'that', 'the', 'their', 'them', 'then', 'there', 'these', 'they', 'this', 'those', 'though', 'through', 'to', 'under', 'use', 'using', 've', 'was', 'we', 'were', 'what', 'where', 'when', 'whether', 'which', 'while', 'who', 'whom', 'with', 'within', 'you', 'your'];
