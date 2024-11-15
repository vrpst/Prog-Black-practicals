const adjectives = ['mad', 'kind', 'happy', 'sad', 'angry']
const nouns = ['fox', 'car', 'dog', 'cat', 'spoon', 'knife', 'fork'];
const verbs = ['eats', 'sleeps', 'walks', 'acts', 'draws', 'speaks'];
const adverbs = ['lazily', 'sloppily', 'energetically', 'manically', 'happily', 'stupidly'];
document.getElementById('button').addEventListener('click', function sentence() {
    let adjective = adjectives[Math.floor(Math.random()*adjectives.length)]
    let noun = nouns[Math.floor(Math.random()*nouns.length)]
    let verb = verbs[Math.floor(Math.random()*verbs.length)]
    let adverb = adverbs[Math.floor(Math.random()*adverbs.length)]
    let sen = ""
    document.getElementById("sentence").innerHTML = sen.concat("The ", adjective, ' ', noun, ' ', verb, ' ', adverb, '.')
})
