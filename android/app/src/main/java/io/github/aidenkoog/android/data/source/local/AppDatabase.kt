package io.github.aidenkoog.android.data.source.local

import androidx.room.Database
import androidx.room.RoomDatabase
import io.github.aidenkoog.android.data.source.local.dao.PhotoDao
import io.github.aidenkoog.android.data.source.local.entity.PhotoEntity

/**
 * To manage data items that can be accessed, updated
 * & maintain relationships between them
 */
@Database(entities = [PhotoEntity::class], version = 1, exportSchema = false)
abstract class AppDatabase : RoomDatabase() {

    abstract val photoDao: PhotoDao

    companion object {
        const val DB_NAME = "AppDatabase.db"
    }
}
