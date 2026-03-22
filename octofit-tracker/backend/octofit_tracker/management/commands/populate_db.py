from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from octofit_tracker.models import Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        User = get_user_model()
        # 清空資料
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # 建立隊伍
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # 建立用戶
        ironman = User.objects.create_user(username='ironman', email='ironman@marvel.com', password='password', team=marvel)
        captain = User.objects.create_user(username='captain', email='captain@marvel.com', password='password', team=marvel)
        batman = User.objects.create_user(username='batman', email='batman@dc.com', password='password', team=dc)
        superman = User.objects.create_user(username='superman', email='superman@dc.com', password='password', team=dc)

        # 建立活動
        Activity.objects.create(user=ironman, type='run', duration=30, calories=300)
        Activity.objects.create(user=batman, type='cycle', duration=45, calories=400)

        # 建立排行榜
        Leaderboard.objects.create(user=ironman, score=1000)
        Leaderboard.objects.create(user=batman, score=900)

        # 建立訓練
        Workout.objects.create(name='Pushups', description='Do 20 pushups', difficulty='Easy')
        Workout.objects.create(name='Plank', description='Hold plank for 1 min', difficulty='Medium')

        self.stdout.write(self.style.SUCCESS('octofit_db 已成功建立測試資料'))
