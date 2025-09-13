import { PrismaClient } from '@prisma/client';
import type {
    GameType,
    AgeGroup,
    KidDifficulty,
    Grade,
    KidLevel,
    KidLearningStyle,
    RewardType,
} from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
    console.log('🌱 Mulai seeding database...');

    // 1. Buat Worlds (Dunia-dunia pembelajaran)
    const worlds = await Promise.all([
        prisma.world.create({
            data: {
                name: 'Dunia Angka',
                description: 'Dunia seru untuk belajar angka dan berhitung!',
                theme: 'numbers',
                color: '#3B82F6',
                icon: '🔢',
                sortOrder: 1,
                isUnlocked: true,
            },
        }),
        prisma.world.create({
            data: {
                name: 'Pulau Pola',
                description:
                    'Petualangan mencari pola dan urutan yang menarik!',
                theme: 'patterns',
                color: '#10B981',
                icon: '🔄',
                sortOrder: 2,
                isUnlocked: false,
            },
        }),
        prisma.world.create({
            data: {
                name: 'Hutan Logika',
                description: 'Tempat yang penuh dengan teka-teki logika seru!',
                theme: 'logic',
                color: '#8B5CF6',
                icon: '🧠',
                sortOrder: 3,
                isUnlocked: false,
            },
        }),
        prisma.world.create({
            data: {
                name: 'Istana Bentuk',
                description: 'Kerajaan bentuk-bentuk geometri yang menawan!',
                theme: 'shapes',
                color: '#F59E0B',
                icon: '🔺',
                sortOrder: 4,
                isUnlocked: false,
            },
        }),
    ]);

    console.log(`✅ Berhasil membuat ${worlds.length} worlds`);

    // 2. Buat Stories untuk setiap world
    const stories = [];

    // Stories untuk Dunia Angka
    const numberStories = await Promise.all([
        prisma.story.create({
            data: {
                title: 'Petualangan Menghitung Kiko',
                description:
                    'Kiko si kelinci kecil belajar menghitung wortel di kebun',
                content: {
                    chapters: [
                        {
                            title: 'Kiko dan Kebun Wortel',
                            content:
                                'Kiko si kelinci kecil suka sekali makan wortel. Suatu pagi, dia pergi ke kebun untuk mengumpulkan wortel untuk sarapan.',
                            illustration: 'rabbit_in_garden.jpg',
                            interactive: {
                                type: 'counting',
                                objects: 'carrots',
                                count: 5,
                            },
                        },
                    ],
                },
                worldId: worlds[0].id,
                ageGroup: 'AGE_6_8' as AgeGroup,
                estimatedTime: 8,
                hasNarration: true,
                illustrations: ['rabbit_garden.jpg', 'counting_carrots.jpg'],
                skillsFocus: ['counting', 'number_recognition'],
                concepts: ['angka 1-10', 'menghitung objek'],
                sortOrder: 1,
                isPublished: true,
            },
        }),
        prisma.story.create({
            data: {
                title: 'Raja Angka dan Harta Karun',
                description:
                    'Membantu Raja Angka menemukan harta karun dengan kode angka',
                content: {
                    chapters: [
                        {
                            title: 'Peta Harta Karun',
                            content:
                                'Raja Angka menemukan peta harta karun tua. Tapi peta ini penuh dengan kode angka yang harus dipecahkan!',
                            illustration: 'treasure_map.jpg',
                        },
                    ],
                },
                worldId: worlds[0].id,
                ageGroup: 'AGE_8_10' as AgeGroup,
                estimatedTime: 12,
                hasNarration: true,
                illustrations: ['treasure_map.jpg', 'number_king.jpg'],
                skillsFocus: ['number_sequences', 'addition'],
                concepts: ['urutan angka', 'penjumlahan sederhana'],
                sortOrder: 2,
                isPublished: true,
            },
        }),
    ]);

    // Stories untuk Pulau Pola
    const patternStories = await Promise.all([
        prisma.story.create({
            data: {
                title: 'Putri Pola dan Kalung Ajaib',
                description:
                    'Membantu Putri Pola melengkapi kalung ajaib dengan pola warna',
                content: {
                    chapters: [
                        {
                            title: 'Kalung yang Hilang Polanya',
                            content:
                                'Putri Pola kehilangan sebagian manik-manik dari kalung ajaibnya. Bisakah kamu membantu melengkapi polanya?',
                            illustration: 'princess_necklace.jpg',
                        },
                    ],
                },
                worldId: worlds[1].id,
                ageGroup: 'AGE_6_8' as AgeGroup,
                estimatedTime: 10,
                hasNarration: true,
                illustrations: ['princess_pattern.jpg', 'magic_necklace.jpg'],
                skillsFocus: ['pattern_recognition', 'color_patterns'],
                concepts: ['pola warna', 'urutan berulang'],
                sortOrder: 1,
                isPublished: true,
            },
        }),
    ]);

    stories.push(...numberStories, ...patternStories);
    console.log(`✅ Berhasil membuat ${stories.length} stories`);

    // 3. Buat Games
    const games = [];

    // Games untuk Dunia Angka
    const numberGames = await Promise.all([
        prisma.game.create({
            data: {
                title: 'Menghitung Buah',
                description: 'Hitung berapa banyak buah di setiap keranjang!',
                type: 'NUMBER_GAME' as GameType,
                worldId: worlds[0].id,
                ageGroup: 'AGE_6_8' as AgeGroup,
                difficulty: 'EASY' as KidDifficulty,
                maxTime: 5,
                gameData: {
                    type: 'counting',
                    objects: ['apples', 'oranges', 'bananas'],
                    range: [1, 10],
                    levels: [
                        { fruits: 'apples', count: 3, basket_color: 'red' },
                        { fruits: 'oranges', count: 7, basket_color: 'orange' },
                        { fruits: 'bananas', count: 5, basket_color: 'yellow' },
                    ],
                },
                backgroundMusic: 'happy_counting_song.mp3',
                soundEffects: ['correct_ding.mp3', 'pop_sound.mp3'],
                animations: {
                    correct: 'bounce_celebration',
                    wrong: 'gentle_shake',
                    complete: 'rainbow_stars',
                },
                starsReward: 3,
                coinsReward: 10,
                stickersReward: ['fruit_sticker', 'counting_master'],
                sortOrder: 1,
            },
        }),
        prisma.game.create({
            data: {
                title: 'Toko Angka Ajaib',
                description:
                    'Bantu penjual toko menghitung kembalian untuk pembeli!',
                type: 'NUMBER_GAME' as GameType,
                worldId: worlds[0].id,
                ageGroup: 'AGE_8_10' as AgeGroup,
                difficulty: 'MEDIUM' as KidDifficulty,
                maxTime: 8,
                gameData: {
                    type: 'money_counting',
                    scenarios: [
                        { item: 'permen', price: 3, paid: 5, change: 2 },
                        { item: 'mainan', price: 7, paid: 10, change: 3 },
                        { item: 'buku', price: 4, paid: 6, change: 2 },
                    ],
                },
                starsReward: 3,
                coinsReward: 15,
                stickersReward: ['shopkeeper_badge', 'math_genius'],
                sortOrder: 2,
            },
        }),
    ]);

    // Games untuk Pulau Pola
    const patternGames = await Promise.all([
        prisma.game.create({
            data: {
                title: 'Jembatan Pola',
                description:
                    'Lengkapi pola untuk membangun jembatan yang kuat!',
                type: 'PATTERN_MATCHING' as GameType,
                worldId: worlds[1].id,
                ageGroup: 'AGE_6_8' as AgeGroup,
                difficulty: 'EASY' as KidDifficulty,
                maxTime: 6,
                gameData: {
                    type: 'pattern_completion',
                    patterns: [
                        {
                            sequence: ['red', 'blue', 'red', 'blue', '?'],
                            answer: 'red',
                        },
                        {
                            sequence: [
                                'circle',
                                'square',
                                'circle',
                                'square',
                                '?',
                            ],
                            answer: 'circle',
                        },
                        {
                            sequence: ['big', 'small', 'big', 'small', '?'],
                            answer: 'big',
                        },
                    ],
                },
                starsReward: 2,
                coinsReward: 8,
                stickersReward: ['bridge_builder', 'pattern_detective'],
                sortOrder: 1,
            },
        }),
    ]);

    // Games untuk Hutan Logika
    const logicGames = await Promise.all([
        prisma.game.create({
            data: {
                title: 'Misteri Kotak Ajaib',
                description:
                    'Pecahkan teka-teki untuk membuka kotak misterius!',
                type: 'LOGIC_PUZZLE' as GameType,
                worldId: worlds[2].id,
                ageGroup: 'AGE_8_10' as AgeGroup,
                difficulty: 'MEDIUM' as KidDifficulty,
                maxTime: 10,
                gameData: {
                    type: 'simple_logic',
                    puzzles: [
                        {
                            question:
                                'Jika semua kucing suka ikan, dan Mimi adalah kucing, apakah Mimi suka ikan?',
                            options: ['Ya', 'Tidak', 'Mungkin'],
                            answer: 'Ya',
                        },
                        {
                            question:
                                'Andi lebih tinggi dari Budi. Budi lebih tinggi dari Cici. Siapa yang paling tinggi?',
                            options: ['Andi', 'Budi', 'Cici'],
                            answer: 'Andi',
                        },
                    ],
                },
                starsReward: 3,
                coinsReward: 20,
                stickersReward: ['logic_master', 'puzzle_solver'],
                sortOrder: 1,
            },
        }),
    ]);

    games.push(...numberGames, ...patternGames, ...logicGames);
    console.log(`✅ Berhasil membuat ${games.length} games`);

    // Rest of the code remains the same...
    // [Achievement, Stickers, Users, Progress data creation code here]

    console.log('🎉 Seeding database berhasil!');
}

main()
    .catch((e: Error) => {
        console.error('❌ Error saat seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
