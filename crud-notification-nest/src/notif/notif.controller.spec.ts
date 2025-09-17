import { Test, TestingModule } from '@nestjs/testing';
import { NotificationController } from './notif.controller';
import { NotificationService } from './notif.services';
import { Notification } from './schemas/notif.schemas';


describe('NotificationController', () => {
  let notificationController: NotificationController;
  let notificationService: jest.Mocked<NotificationService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationController],
      providers: [
        {
          provide: NotificationService,
          useValue: {
            create: jest.fn(),
            delete: jest.fn(),
            update: jest.fn(),
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    notificationController = module.get<NotificationController>(NotificationController);
    notificationService = module.get<jest.Mocked<NotificationService>>(NotificationService);
  });
 

  describe('create', () => {
    it('devrait appeler notificationService.create et retourner son résultat', async () => {
      const fakeNotification: Notification = {
        title: 'Test',
        message: 'Hello',
        date: new Date(),
      };
      const expectedResult = { _id: '1', ...fakeNotification };

      (notificationService.create).mockResolvedValue(expectedResult as any);

      const result = await notificationController.create(fakeNotification);

      expect(notificationService.create).toHaveBeenCalledWith(fakeNotification);
      expect(result).toEqual(expectedResult);
    });
  });


  describe('delete', () => {
    it('devrait appeler notificationService.delete avec le bon id et retourner son résultat', async () => {
      const id = 'abc123';
      const expectedResult = { acknowledged: true, deletedCount: 1 };

      (notificationService.delete).mockResolvedValue(expectedResult as any);

      const result = await notificationController.delete(id);

      expect(notificationService.delete).toHaveBeenCalledWith(id);
      expect(result).toEqual(expectedResult);
    });
    });
    describe('update', () => {
      it('devrait appeler notificationService.update avec le bon id et les bonnes données, et retourner son résultat', async () => {
        const id = '1';
        const updatedNotification: Partial<Notification> = {
          title: 'Titre modifié',
          message: 'Message modifié',
          date: new Date(),
        };
        const expectedResult = { _id: id, ...updatedNotification };

        (notificationService.update).mockResolvedValue(expectedResult as any);

        const result = await notificationController.update(id, updatedNotification);

        expect(notificationService.update).toHaveBeenCalledWith(id, updatedNotification);
        expect(result).toEqual(expectedResult);
      });
  });
  describe('findAll', () => {
    it('devrait appeler notificationService.findAll et retourner la liste des notifications', async () => {
      const expectedResult: Partial<Notification>[] = [
        { title: 'Notif 1', message: 'Hello', date: new Date() },
        { title: 'Notif 2', message: 'World', date: new Date() },
      ];

      notificationService.findAll.mockResolvedValue(expectedResult as any);

      const result = await notificationController.findAll();

      expect(notificationService.findAll).toHaveBeenCalled();
      expect(result).toEqual(expectedResult);
    });
  });
});