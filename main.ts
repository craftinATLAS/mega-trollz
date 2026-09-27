// Give super speed when eating an apple
player.onItemInteracted(APPLE, function () {
        mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 10, 5)
        player.say("Super Speed Activated! ⚡")
        })
player.onChat("thor", function () {
    player.execute("execute at @p run summon lightning_bolt")



            builder.place(LIGHTNING_BOLT)
            })
player.onChat("fly", function () {
    player.execute("teleport @p ~ ~100 ~")
    })
    player.onChat("attack", function () {
            player.execute("execute at @p run summon tnt ~ ~ ~ {Fuse:0}")
            })

    player.onChat("verity", function () {
            player.execute("title @a title §cRUN!")
            })
            player.onChat("magic", function () {
                    player.execute("time set night")
                        player.execute("execute at @p run summon enderman ~2 ~ ~")
                            player.execute("execute at @p run summon enderman ~-2 ~ ~")
                                player.execute("execute at @p run particle minecraft:huge_explosion_emitter ~ ~ ~")
                                    player.execute("execute at @p run playsound mob.wither.spawn @a ~ ~ ~")
                                        player.execute("execute at @p run summon lightning_bolt ~ ~ ~")
                                        })
player.onChat("jumpscare", function () {
        player.execute("execute at @p run title @p title §c§l☠ JUMPSCARE! ☠")
            player.execute("execute at @p run playsound mob.ghast.scream @p ~ ~ ~ 10 1")
                player.execute("execute at @p run effect @p blindness 2 1 true")
                })
player.onChat("monkey", function () {
        player.execute("execute at @p run summon cave_spider ~1 ~ ~ minecraft:entity_born \"Monkey\"")
            player.execute("execute at @p run summon cave_spider ~-1 ~ ~ minecraft:entity_born \"Monkey\"")
                player.execute("execute at @p run playsound mob.monkey.say @a ~ ~ ~ 1 1")
                })

